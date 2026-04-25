import { useState } from 'react';
import { 
  format, 
  startOfMonth, 
  startOfWeek, 
  addDays, 
  isSameMonth, 
  addMonths, 
  subMonths 
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import './Calendary.css';

function Calendary() {
  const [mesExibido, setMesExibido] = useState(new Date());

  const inicioMes = startOfMonth(mesExibido);
  // IMPORTANTE: weekStartsOn: 0 garante que a semana comece no Domingo
  const dataInicialGrade = startOfWeek(inicioMes, { weekStartsOn: 0 });

  const diasDaGrade = Array.from({ length: 42 }).map((_, i) => 
    addDays(dataInicialGrade, i)
  );

  // Corrigi os nomes aqui para evitar o erro da foto
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="page-wrapper">
      <nav className="navbar-custom">Barra de navegação</nav>

      <main className="main-content">
        <div className="calendar-card">
          
          <header className="calendar-header">
            <button className="nav-btn" onClick={() => setMesExibido(subMonths(mesExibido, 1))}>&lt;</button>
            <h2 className="month-title">{format(mesExibido, 'MMMM de yyyy', { locale: ptBR })}</h2>
            <button className="nav-btn" onClick={() => setMesExibido(addMonths(mesExibido, 1))}>&gt;</button>
          </header>

          {/* Cabeçalho de dias com nomes */}
          <div className="weekdays-grid">
            {diasSemana.map(dia => (
              <div key={dia} className="weekday-cell">{dia}</div>
            ))}
          </div>

          {/* Grade de números */}
          <div className="days-grid">
            {diasDaGrade.map((dia) => (
              <div 
                key={dia.toISOString()} 
                className={`day-cell ${!isSameMonth(dia, mesExibido) ? 'neighbor-day' : ''}`}
                onClick={() => console.log(dia)}
              >
                {format(dia, 'd')}
              </div>
            ))}
          </div>

        </div>
      </main>

      <footer className="footer-custom">Rodapé</footer>
    </div>
  );
}

export default Calendary;