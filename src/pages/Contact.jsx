const Contact = () => {
  return (
    <div className="container mt-4">
      <h1>Contacto</h1>
      
      <div className="row">
        
        
        <div className="col-md-6">
          <h3>Enviar mensaje</h3>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Nombre" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="3" placeholder="Mensaje"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;