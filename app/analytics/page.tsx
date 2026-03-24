'use client';

import { useState } from 'react';

// ─── Data ───────────────────────────────────────────────

const monthlyData = [
  { month: 'Oct', income: 4200, expenses: 3100, savings: 1100 },
  { month: 'Nov', income: 4850, expenses: 3400, savings: 1450 },
  { month: 'Dec', income: 5200, expenses: 4100, savings: 1100 },
  { month: 'Jan', income: 4600, expenses: 2900, savings: 1700 },
  { month: 'Feb', income: 4850, expenses: 3200, savings: 1650 },
  { month: 'Mar', income: 4850, expenses: 3200, savings: 1650 },
];

const incomeBreakdown = [
  { source: 'Salary', amount: 4200, percentage: 87, color: 'bg-indigo-500' },
  { source: 'Freelance', amount: 450, percentage: 9, color: 'bg-violet-500' },
  { source: 'Investments', amount: 200, percentage: 4, color: 'bg-cyan-500' },
];

const categories = [
  { name: 'Food & Dining', amount: 820, percentage: 26, color: 'bg-orange-500', icon: '🍽️' },
  { name: 'Transportation', amount: 340, percentage: 11, color: 'bg-blue-500', icon: '🚗' },
  { name: 'Entertainment', amount: 480, percentage: 15, color: 'bg-purple-500', icon: '🎬' },
  { name: 'Shopping', amount: 650, percentage: 20, color: 'bg-pink-500', icon: '🛍️' },
  { name: 'Utilities', amount: 210, percentage: 7, color: 'bg-teal-500', icon: '⚡' },
  { name: 'Subscriptions', amount: 156, percentage: 5, color: 'bg-red-500', icon: '📱' },
  { name: 'Healthcare', amount: 320, percentage: 10, color: 'bg-green-500', icon: '🏥' },
  { name: 'Other', amount: 224, percentage: 6, color: 'bg-gray-500', icon: '📦' },
];

const savingsGoals = [
  { name: 'Emergency Fund', current: 8200, target: 10000, color: 'bg-green-500' },
  { name: 'Vacation', current: 1800, target: 3000, color: 'bg-blue-500' },
  { name: 'New Car', current: 4500, target: 15000, color: 'bg-violet-500' },
];

const insights = [
  { title: 'Spending is down', description: 'You spent 12% less this month compared to last month. Keep it up!', type: 'positive' as const },
  { title: 'Food spending spike', description: 'Your dining expenses increased by $120. Consider cooking more at home.', type: 'warning' as const },
  { title: 'Savings goal on track', description: 'You\'re on pace to reach your $10,000 emergency fund by August.', type: 'positive' as const },
];

const tabs = ['Overview', 'Income', 'Expenses', 'Savings'] as const;
type Tab = typeof tabs[number];

// ─── Components ─────────────────────────────────────────

function SummaryCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-xl border p-5">
        <p className="text-sm text-gray-500">Total Income</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">$4,850</p>
        <p className="text-xs text-green-600 mt-1">↑ 3.2% vs last month</p>
      </div>
      <div className="bg-white rounded-xl border p-5">
        <p className="text-sm text-gray-500">Total Expenses</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">$3,200</p>
        <p className="text-xs text-red-500 mt-1">↑ 5.8% vs last month</p>
      </div>
      <div className="bg-white rounded-xl border p-5">
        <p className="text-sm text-gray-500">Net Savings</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">$1,650</p>
        <p className="text-xs text-green-600 mt-1">↑ 8.1% vs last month</p>
      </div>
      <div className="bg-white rounded-xl border p-5">
        <p className="text-sm text-gray-500">Savings Rate</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">34%</p>
        <p className="text-xs text-green-600 mt-1">Above 20% target</p>
      </div>
    </div>
  );
}

function BarChart({ dataKey, color, label }: { dataKey: 'income' | 'expenses' | 'savings'; color: string; label: string }) {
  const maxVal = Math.max(...monthlyData.map(d => d[dataKey]));
  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">{label} Over Time</h2>
        <span className="flex items-center gap-1.5 text-sm"><span className={`h-3 w-3 rounded-full ${color}`}></span>{label}</span>
      </div>
      <div className="flex items-end gap-4 h-48">
        {monthlyData.map(d => (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex items-end h-40">
              <div className={`w-full ${color} rounded-t-md transition-all hover:opacity-80`} style={{ height: `${(d[dataKey] / maxVal) * 100}%` }} title={`$${d[dataKey].toLocaleString()}`} />
            </div>
            <span className="text-xs text-gray-500">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverviewTab() {
  const maxBar = Math.max(...monthlyData.map(d => Math.max(d.income, d.expenses)));
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const totalExpenses = categories.reduce((sum, c) => sum + c.amount, 0);

  return (
    <>
      <SummaryCards />
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Income vs Expenses</h2>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-indigo-500"></span>Income</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-rose-400"></span>Expenses</span>
            </div>
          </div>
          <div className="flex items-end gap-6 h-56">
            {monthlyData.map(d => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-1 items-end h-48">
                  <div className="flex-1 bg-indigo-500 rounded-t-md transition-all hover:bg-indigo-600" style={{ height: `${(d.income / maxBar) * 100}%` }} />
                  <div className="flex-1 bg-rose-400 rounded-t-md transition-all hover:bg-rose-500" style={{ height: `${(d.expenses / maxBar) * 100}%` }} />
                </div>
                <span className="text-xs text-gray-500">{d.month}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Top Categories</h2>
          <div className="space-y-3">
            {categories.slice(0, 5).map(cat => (
              <button key={cat.name} onClick={() => setSelectedCat(selectedCat === cat.name ? null : cat.name)}
                className={`w-full text-left rounded-lg p-3 transition-all ${selectedCat === cat.name ? 'bg-gray-50 ring-2 ring-indigo-500' : 'hover:bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium flex items-center gap-2"><span>{cat.icon}</span>{cat.name}</span>
                  <span className="text-sm font-semibold">${cat.amount}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.percentage}%` }} />
                </div>
                {selectedCat === cat.name && (
                  <div className="mt-2 pt-2 border-t text-xs text-gray-500">
                    <p>{cat.percentage}% of total (${totalExpenses.toLocaleString()})</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center gap-2 mb-4"><span className="text-lg">✨</span><h2 className="text-lg font-semibold">Smart Insights</h2></div>
        <div className="grid grid-cols-3 gap-4">
          {insights.map((ins, i) => (
            <div key={i} className={`rounded-lg p-4 ${ins.type === 'positive' ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
              <p className={`text-sm font-semibold ${ins.type === 'positive' ? 'text-green-800' : 'text-amber-800'}`}>{ins.title}</p>
              <p className={`text-xs mt-1 ${ins.type === 'positive' ? 'text-green-600' : 'text-amber-600'}`}>{ins.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function IncomeTab() {
  const totalIncome = incomeBreakdown.reduce((s, i) => s + i.amount, 0);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Monthly Income</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">${totalIncome.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">YTD Income</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$14,500</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Projected Annual</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$58,200</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <BarChart dataKey="income" color="bg-indigo-500" label="Income" />
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Income Sources</h2>
          <div className="space-y-4">
            {incomeBreakdown.map(src => (
              <div key={src.source}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{src.source}</span>
                  <span className="text-sm font-semibold">${src.amount.toLocaleString()}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${src.color} rounded-full`} style={{ width: `${src.percentage}%` }} />
                </div>
                <p className="text-xs text-gray-400 mt-1">{src.percentage}% of total</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ExpensesTab() {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const totalExpenses = categories.reduce((sum, c) => sum + c.amount, 0);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Monthly Expenses</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Daily Average</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">${Math.round(totalExpenses / 30)}</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Largest Expense</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$650</p>
          <p className="text-xs text-gray-500 mt-1">Shopping</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <BarChart dataKey="expenses" color="bg-rose-400" label="Expenses" />
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">All Categories</h2>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {categories.map(cat => (
              <button key={cat.name} onClick={() => setSelectedCat(selectedCat === cat.name ? null : cat.name)}
                className={`w-full text-left rounded-lg p-3 transition-all ${selectedCat === cat.name ? 'bg-gray-50 ring-2 ring-indigo-500' : 'hover:bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium flex items-center gap-2"><span>{cat.icon}</span>{cat.name}</span>
                  <span className="text-sm font-semibold">${cat.amount}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.percentage}%` }} />
                </div>
                {selectedCat === cat.name && (
                  <div className="mt-2 pt-2 border-t text-xs text-gray-500">
                    <p>{cat.percentage}% of total · Avg. ${Math.round(cat.amount / 30)}/day</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function SavingsTab() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Monthly Savings</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$1,650</p>
          <p className="text-xs text-green-600 mt-1">34% savings rate</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Total Saved (YTD)</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$4,900</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-gray-500">Goals Progress</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">2 of 3</p>
          <p className="text-xs text-gray-500 mt-1">On track</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <BarChart dataKey="savings" color="bg-emerald-500" label="Savings" />
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Savings Goals</h2>
          <div className="space-y-5">
            {savingsGoals.map(goal => (
              <div key={goal.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{goal.name}</span>
                  <span className="text-sm text-gray-500">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${goal.color} rounded-full transition-all`} style={{ width: `${(goal.current / goal.target) * 100}%` }} />
                </div>
                <p className="text-xs text-gray-400 mt-1">{Math.round((goal.current / goal.target) * 100)}% complete</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Page ───────────────────────────────────────────────

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">Track your spending patterns and financial health.</p>
      </div>

      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit mb-8">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Overview' && <OverviewTab />}
      {activeTab === 'Income' && <IncomeTab />}
      {activeTab === 'Expenses' && <ExpensesTab />}
      {activeTab === 'Savings' && <SavingsTab />}
    </div>
  );
}
