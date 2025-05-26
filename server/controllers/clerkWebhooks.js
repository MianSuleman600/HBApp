import Customer from '../models/Customer';
import { Webhook } from 'svix';

const clerkWebhooks = async (req, res) => {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    const wh = new Webhook(webhookSecret);

    // Extract and structure headers
    const headers = {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    };

    // Parse the event using Svix
    const evt = wh.verify(JSON.stringify(req.body), headers);
    const { data, type } = evt;

    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address || '',
      username: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
      image: data.image_url || '',
    };

    switch (type) {
      case 'user.created':
        await Customer.create(userData);
        break;

      case 'user.updated':
        await Customer.findByIdAndUpdate(data.id, userData, { new: true });
        break;

      case 'user.deleted':
        await Customer.findByIdAndDelete(data.id);
        break;

      default:
        console.log('⚠️ Unhandled Clerk webhook type:', type);
    }

    return res.status(200).json({ success: true, message: `Webhook handled: ${type}` });

  } catch (err) {
    console.error('❌ Clerk Webhook error:', err);
    return res.status(400).json({ success: false, error: err.message });
  }
};

export default clerkWebhooks;
