const savingsGoals = [
  { id: 1, name: "Emergency Fund", saved: 4200, target: 10000, accent: "indigo", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { id: 2, name: "Dream Vacation", saved: 1650, target: 3500, accent: "emerald", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { id: 3, name: "New Car", saved: 2800, target: 15000, accent: "amber", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
];

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

      {/* Savings Goals */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Savings Goals</h2>
            <p className="text-sm text-gray-500">Track your progress toward what matters</p>
          </div>
          <button className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100">+ New goal</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {savingsGoals.map((goal) => {
            const percent = Math.min(100, Math.round((goal.saved / goal.target) * 100));
            const bgLight = { indigo: "bg-indigo-50", emerald: "bg-emerald-50", amber: "bg-amber-50" }[goal.accent] ?? "bg-gray-50";
            const iconColor = { indigo: "text-indigo-600", emerald: "text-emerald-600", amber: "text-amber-600" }[goal.accent] ?? "text-gray-600";
            const barColor = { indigo: "bg-indigo-500", emerald: "bg-emerald-500", amber: "bg-amber-500" }[goal.accent] ?? "bg-gray-500";
            return (
              <div key={goal.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${bgLight}`}>
                    <svg className={`h-5 w-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={goal.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{goal.name}</p>
                    <p className="text-xs text-gray-500">${goal.saved.toLocaleString()} of ${goal.target.toLocaleString()}</p>
                  </div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className={`h-full ${barColor} rounded-full transition-all`} style={{ width: `${percent}%` }} />
                </div>
                <p className="mt-2 text-right text-xs font-medium text-gray-600">{percent}%</p>
              </div>
            );
          })}
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
