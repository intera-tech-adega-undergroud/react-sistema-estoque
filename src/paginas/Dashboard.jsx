import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './Dashboard.css'

const defaultDailyData = [
  { dia: '01/03', valor: 2100 },
  { dia: '02/03', valor: 2900 },
  { dia: '03/03', valor: 2400 },
  { dia: '04/03', valor: 3500 },
  { dia: '05/03', valor: 3000 },
  { dia: '06/03', valor: 3800 },
  { dia: '07/03', valor: 3300 },
]

const defaultWeeklyData = [
  { semana: 'S1', vendas: 12300 },
  { semana: 'S2', vendas: 14700 },
  { semana: 'S3', vendas: 13600 },
  { semana: 'S4', vendas: 16900 },
]

const defaultRanking = [
  { nome: 'Larissa', valor: 'R$ 16.900' },
  { nome: 'Bruno', valor: 'R$ 14.700' },
  { nome: 'Camila', valor: 'R$ 13.600' },
]

const barColors = ['#7FFF9A', '#5DF47D', '#4FE26E', '#3ECE62', '#35BE58', '#2EAF50', '#279F47']

function DashboardPage({
  dailyData = defaultDailyData,
  weeklyData = defaultWeeklyData,
  ranking = defaultRanking,
  onCloseCash,
}) {
  return (
    <section className="dashboard-screen">
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <article className="dashboard-card">
            <div className="dashboard-card__header">
              <h2 className="dashboard-title">Vendas Diarias</h2>
            </div>

            <div className="dashboard-chart-wrap">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={dailyData} barSize={34}>
                  <defs>
                    <linearGradient id="dailyBarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8DFFB0" />
                      <stop offset="100%" stopColor="#22A542" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="#2A2D33" strokeDasharray="4 4" />
                  <XAxis dataKey="dia" stroke="#A8B0B9" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                  <YAxis stroke="#A8B0B9" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                  <Tooltip
                    cursor={{ fill: 'rgba(255, 255, 255, 0.04)' }}
                    contentStyle={{
                      backgroundColor: '#16181D',
                      border: '1px solid #2A2D33',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                    }}
                    formatter={(value) => [`R$ ${Number(value).toLocaleString('pt-BR')}`, 'Vendas']}
                  />
                  <Bar dataKey="valor" radius={[6, 6, 0, 0]}>
                    {dailyData.map((entry, index) => (
                      <Cell
                        key={`${entry.dia}-${index}`}
                        fill={index === dailyData.length - 1 ? 'url(#dailyBarGradient)' : barColors[index % barColors.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="dashboard-card">
            <div className="dashboard-card__header">
              <h2 className="dashboard-title">Vendas Semanais</h2>
            </div>

            <div className="dashboard-chart-wrap">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={weeklyData} barSize={36}>
                  <defs>
                    <linearGradient id="weeklyBarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8DFFB0" />
                      <stop offset="100%" stopColor="#20A140" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="#2A2D33" strokeDasharray="4 4" />
                  <XAxis dataKey="semana" stroke="#A8B0B9" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                  <YAxis stroke="#A8B0B9" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                  <Tooltip
                    cursor={{ fill: 'rgba(255, 255, 255, 0.04)' }}
                    contentStyle={{
                      backgroundColor: '#16181D',
                      border: '1px solid #2A2D33',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                    }}
                    formatter={(value) => [`R$ ${Number(value).toLocaleString('pt-BR')}`, 'Vendas']}
                  />
                  <Bar dataKey="vendas" fill="url(#weeklyBarGradient)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>
        </div>

        <div className="dashboard-right">
          <aside className="dashboard-side-card dashboard-filter-card">
            <div className="dashboard-filters">
              <label className="dashboard-filter-item">
                <span>Vendas Totais</span>
                <select defaultValue="vendas">
                  <option value="vendas">Vendas Totais</option>
                  <option value="lucro">Lucro</option>
                </select>
              </label>

              <label className="dashboard-filter-item">
                <span>Este mes</span>
                <select defaultValue="mes-atual">
                  <option value="mes-atual">Este mes</option>
                  <option value="ultimo-mes">Ultimo mes</option>
                  <option value="trimestre">Ultimo trimestre</option>
                </select>
              </label>
            </div>
          </aside>

          <aside className="dashboard-side-card">
            <div className="dashboard-ranking">
              <h3>Ranking por Vendedor</h3>
              <ul>
                {ranking.map((item) => (
                  <li key={item.nome}>
                    <span>{item.nome}</span>
                    <strong>{item.valor}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <aside className="dashboard-side-card">
            <div className="dashboard-close-head">
              <h3>Fechamento de Caixa</h3>
            </div>
            <form className="dashboard-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                <span>Cliente</span>
                <input type="text" placeholder="Nome do cliente" />
              </label>

              <label>
                <span>Valor</span>
                <input type="number" placeholder="R$ 0,00" />
              </label>

              <label>
                <span>Observacoes</span>
                <textarea rows="4" placeholder="Detalhes do fechamento" />
              </label>

              <button type="button" className="dashboard-close-btn" onClick={onCloseCash}>
                Fechar Caixa
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
