function LoanDetails({
  info,
  onChange,
  isDisabled,
  handleBlur,
  touchedFields,
}) {
  return (
    <div className="grid gap-2 py-2">
      <h2 className="text-gray-500 font-bold text-xl py-4">Loan Details</h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col w-full">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.date && !info?.date ? "text-red-500" : ""
            }`}
          >
            Date *
          </label>
          <input
            type="date"
            value={info?.date}
            onChange={(e) => onChange("date", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.date && !info?.date ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 lg:w-1/4`}
            onBlur={() => handleBlur("date")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.amount && !info?.amount ? "text-red-500" : ""
            }`}
          >
            Amount *
          </label>
          <input
            type="text"
            value={info?.amount}
            onChange={(e) => onChange("amount", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.amount && !info?.amount ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("amount")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.duration && !info?.duration ? "text-red-500" : ""
            }`}
          >
            Duration *
          </label>
          <select
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.duration && !info?.duration ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            onBlur={() => handleBlur("duration")}
            disabled={isDisabled}
            value={info?.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          >
            <option value="" disabled defaultValue></option>
            <option value="one">One Month</option>
            <option value="two">Two Months</option>
            <option value="three">Three Months</option>
            <option value="four">Four Months</option>
            <option value="five">Five Months</option>
            <option value="six">Six Months</option>
          </select>
        </div>
        <div className="flex flex-col flex-grow">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.paymentInterval && !info?.paymentInterval
                ? "text-red-500"
                : ""
            }`}
          >
            Payment Interval *
          </label>
          <select
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.paymentInterval && !info?.paymentInterval
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2 h-full`}
            onBlur={() => handleBlur("paymentInterval")}
            disabled={isDisabled}
            value={info?.paymentInterval}
            onChange={(e) => onChange("paymentInterval", e.target.value)}
          >
            <option value="" disabled defaultValue></option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">2nd or 4th of the Month</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.remainingLoanBalance && !info?.remainingLoanBalance
                ? "text-red-500"
                : ""
            }`}
          >
            Remaining Loan Balance *
          </label>
          <input
            type="text"
            value={info?.remainingLoanBalance}
            onChange={(e) => onChange("remainingLoanBalance", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.remainingLoanBalance && !info?.remainingLoanBalance
                ? "border-red-500"
                : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("remainingLoanBalance")}
            disabled={isDisabled}
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            className={`font-light text-gray-400 text-sm ${
              touchedFields.reason && !info?.reason ? "text-red-500" : ""
            }`}
          >
            Reason
          </label>
          <input
            type="text"
            value={info?.reason}
            onChange={(e) => onChange("reason", e.target.value)}
            className={`${isDisabled ? "bg-gray-200" : "bg-white"} ${
              touchedFields.reason && !info?.reason ? "border-red-500" : ""
            } border-gray-400 border rounded-lg pl-2 py-2 lg:p-2`}
            onBlur={() => handleBlur("reason")}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}

export default LoanDetails;
