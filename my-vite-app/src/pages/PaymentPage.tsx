import { Button } from "@/components/ui/button";
import {Card} from "@/components/ui/card"

  
 // Adjust based on actual structure
import paymentImage from './images/payment.jpg'; // Replace with actual image path

function PaymentPage() {
    return (
      <div className="payment-page">
        <h1>Payment Page</h1>
        <Card>
          <img src={paymentImage} alt="Payment Illustration" /> {/* Use standard img tag */}
          <p>Purchase access to our mobile application.</p>
          <Button onClick={() => window.location.href = 'https://your-payment-link.com'}>
            Buy Now
          </Button>
        </Card>
      </div>
    );
  }

export default PaymentPage;
