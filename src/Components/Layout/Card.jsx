import PropTypes from 'prop-types';

function Card({ children }) {
   return (
      <div
         className='backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6'
         style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Soft shadow for depth
            border: '1px solid rgba(255, 255, 255, 0.4)', // Light border to define card edges
         }}>
         {children}
      </div>
   );
}

function Title({ children }) {
   return (
      <div className={'border-b mb-4'}>
         <h1 className=' p-2   text-3xl font-bold text-center font-poppins tracking-wider text-gray-100'>{children}</h1>
      </div>
   );
}

function Footer({ children }) {
   return (
      <div className={'p-4 flex justify-center'}>
         <span className='text-center text-sm text-white'>{children}</span>
      </div>
   );
}

function Body({ children }) {
   return <div className={'leading-relaxed p-4 flex flex-col items-center space-y-4'}>{children}</div>;
}

Card.title = Title;
Card.body = Body;
Card.footer = Footer;

Card.propTypes = {
   children: PropTypes.node,
};

export default Card;
