
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>

        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        
         <a className='navbar-brand page-scroll' href='#page-top'>
          
          </a>{' '}
         <img className="logo" src="img/logo.png" alt="Smart Tech Solutions" />
          
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#page-top' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Serviços
              </a>
            </li>
            <li>
              <a href='#planos' className='page-scroll'>
                Planos
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Clientes
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Equipe
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
