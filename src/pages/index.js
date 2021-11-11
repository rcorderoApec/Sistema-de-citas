function Citas() {
    return ( 
        <form>
            <div className="row">
            <div className="mb-3 col-lg-4">
                <label for="name" class="form-label">Nombre del paciente</label>
                <input type="password" class="form-control" id="name" aria-describedby="name"/>
            </div>
            <div className="mb-3 col-lg-4">
            <label for="Especialidad" class="form-label">Especialidad</label>
                <select class="form-select" aria-label="Default select example" id="Especialidad">
                    <option selected disabled>Seleccionar</option>
                    <option value="1">Ginecologia</option>
                    <option value="2">Cardiologia</option>
                    <option value="3">Pedriatria</option>
                </select>
            </div>
            <div className="mb-3 col-lg-4">
            <label for="Doctor" class="form-label">Doctor</label>
                <select class="form-select" id='Doctor'>
                    <option selected disabled>Seleccionar</option>
                    <option value="1">Juan Amen</option>
                    <option value="2">Carlota de Limon</option>
                    <option value="3">San Pancracio</option>
                </select>
            </div>
            <div className="mb-3 col-lg-4">
            <label for="date" class="form-label">Fecha</label>
            <input type="date" class="form-control" id="date" aria-describedby="emailHelp" id="date"/>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     );
}

export default Citas;