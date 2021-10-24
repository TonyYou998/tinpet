import React from 'react'

function FormGiveUp() {
    return (
      <form>
        <div className="form-group py-2">
          <label htmlFor="exampleInputEmail1">Pet's name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="exampleInputEmail1">Race</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Race"
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="exampleInputEmail1">Contact</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter Phone number"
          />
        </div>

        <div className="form-group py-2">
          <label htmlFor="exampleInputEmail1">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Address "
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="exampleInputEmail1">Pet image</label>
          <input
            type="file"
            className="form-control"
            placeholder="Enter your Address "
          />
        </div>
        <div className="input-group py-2 mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Gender
            </label>
          </div>
          <select className="custom-select w-50" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
            
          </select>
        </div>

        <div className="input-group py-2 mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              purpose
            </label>
          </div>
          <select className="custom-select w-50" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value={1}>Give</option>
            <option value={2}>Breed</option>
            
          </select>
        </div>

        <div className="input-group py-2 mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              type
            </label>
          </div>
          <select className="custom-select w-50" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value={1}>Dog</option>
            <option value={2}>Cat</option>
            <option value={3}>Others</option>
            
            
          </select>
        </div>
        

        
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    );
}

export default FormGiveUp;
