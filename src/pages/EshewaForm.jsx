import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import { useMemo } from "react";
import { FaWallet } from "react-icons/fa";

function EshewaForm() {
  const { state } = useLocation(); // total amount
  const transaction_uuid = useMemo(() => uuidv4(), []);

  const message = `total_amount=${state},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <FaWallet className="text-green-600 text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              eSewa Payment
            </h1>
            <p className="text-sm text-gray-500">
              Secure digital wallet payment
            </p>
          </div>
        </div>

        {/* Amount Card */}
        <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="text-3xl font-bold text-gray-900">
            NPR {state}
          </p>
        </div>

        {/* Form */}
        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
          className="space-y-3"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="amount" value={state} />
          <input type="hidden" name="tax_amount" value="0" />
          <input type="hidden" name="total_amount" value={state} />
          <input
            type="hidden"
            name="transaction_uuid"
            value={transaction_uuid}
          />
          <input type="hidden" name="product_code" value="EPAYTEST" />
          <input type="hidden" name="product_service_charge" value="0" />
          <input type="hidden" name="product_delivery_charge" value="0" />
          <input
            type="hidden"
            name="success_url"
            value="http://localhost:5173/success"
          />
          <input
            type="hidden"
            name="failure_url"
            value="http://localhost:5173/failure"
          />
          <input
            type="hidden"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
          />
          <input type="hidden" name="signature" value={signature} />

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-600 py-3 text-white font-medium hover:bg-green-700 transition  cursor-pointer"
          >
            Pay with eSewa
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-400 text-center">
          You will be redirected to eSewa to complete your payment securely.
        </p>
      </div>
    </div>
  );
}

export default EshewaForm;
