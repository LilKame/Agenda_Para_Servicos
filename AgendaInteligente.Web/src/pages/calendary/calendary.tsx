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
import './calendary.css';

function Calendary() {
  const [mesExibido, setMesExibido] = useState(new Date());

  const inicioMes = startOfMonth(mesExibido);
  const dataInicialGrade = startOfWeek(inicioMes, { weekStartsOn: 0 });

  const diasDaGrade = Array.from({ length: 42 }).map((_, i) => 
    addDays(dataInicialGrade, i)
  );

  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="page-wrapper">
      <nav className="navbar-custom">Barra de navegação</nav>

      <main className="main-content">
        <div className="calendar-card">
          <header className="calendar-header">
            <button className="nav-btn" onClick={() => setMesExibido(subMonths(mesExibido, 1))}>

              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
              </svg>

            </button>
            <h2 className="month-title">
              {format(mesExibido, 'MMMM yyyy', { locale: ptBR })}
            </h2>
            <button className="nav-btn" onClick={() => setMesExibido(addMonths(mesExibido, 1))}>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
              
              </button>
          </header>

          <div className="weekdays-grid">
            {diasSemana.map(dia => (
              <div key={dia} className="weekday-cell">{dia}</div>
            ))}
          </div>

          <div className="days-grid">
            {diasDaGrade.map((dia) => (
              <div 
                key={dia.toISOString()} 
                className={`day-cell ${!isSameMonth(dia, mesExibido) ? 'neighbor-day' : ''}`}
                onClick={() => console.log("Clicou em:", format(dia, 'dd/MM/yyyy'))}
              >
                {format(dia, 'd')}
              </div>
            ))}
          </div>
        </div>
        <div className='up-menu-hours'>
          <div className='hours'>
            <p>08:00</p>
            </div>
          <div className='hours'>
            <p>09:00</p>
          </div>
        </div>
      </main>

      <footer className="footer-custom">Rodapé</footer>
    </div>
  );
}

export default Calendary;