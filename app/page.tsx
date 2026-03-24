const transactions = [
  { id: 1, name: "Netflix Subscription", category: "Entertainment", amount: -15.99, date: "Mar 22, 2026", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  { id: 2, name: "Salary Deposit", category: "Income", amount: 4850.00, date: "Mar 20, 2026", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: 3, name: "Whole Foods Market", category: "Groceries", amount: -87.34, date: "Mar 19, 2026", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
  { id: 4, name: "Uber Ride", category: "Transport", amount: -24.50, date: "Mar 18, 2026", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
  { id: 5, name: "Transfer from Sarah", category: "Transfer", amount: 250.00, date: "Mar 17, 2026", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
  { id: 6, name: "Spotify Premium", category: "Entertainment", amount: -9.99, date: "Mar 16, 2026", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" },
];

export default function Dashboard() {
  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex</h1>
        <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your finances today.</p>
      </div>

      {/* Balance Card + Quick Actions */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Balance Card */}
        <div className="col-span-2 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 text-white shadow-lg">
          <p className="text-sm font-medium text-indigo-200">Total Balance</p>
          <p className="mt-2 text-4xl font-bold tracking-tight">$12,450.00</p>
          <div className="mt-6 flex gap-8">
            <div>
              <p className="text-xs text-indigo-300">Income this month</p>
              <p className="mt-1 text-lg font-semibold">+$5,100.00</p>
            </div>
            <div>
              <p className="text-xs text-indigo-300">Spending this month</p>
              <p className="mt-1 text-lg font-semibold">-$3,200.00</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:shadow-md hover:border-indigo-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
              <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Send Money</p>
              <p className="text-xs text-gray-500">Transfer to anyone</p>
            </div>
          </button>
          <button className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:shadow-md hover:border-emerald-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
              <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Request Money</p>
              <p className="text-xs text-gray-500">Get paid by friends</p>
            </div>
          </button>
          <button className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:shadow-md hover:border-amber-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Pay Bills</p>
              <p className="text-xs text-gray-500">Manage payments</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
        </div>
        <div className="divide-y divide-gray-50">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${tx.amount > 0 ? "bg-emerald-100" : "bg-gray-100"}`}>
                  <svg className={`h-5 w-5 ${tx.amount > 0 ? "text-emerald-600" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={tx.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{tx.name}</p>
                  <p className="text-xs text-gray-500">{tx.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${tx.amount > 0 ? "text-emerald-600" : "text-gray-900"}`}>
                  {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                </p>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
