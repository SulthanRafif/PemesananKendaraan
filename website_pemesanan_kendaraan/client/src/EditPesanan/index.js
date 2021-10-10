import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";

const schema = yup.object().shape({});

function EditPesanan(props) {
  useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {};
  return (
    <div>
      <div className="container-fluid row mt-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-3">
              <label>Nama Pemesan</label>
              <input />
            </div>
            <div className="form-group mt-3">
              <label>Nama Kendaraan</label>
              <input />
            </div>
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
            <div></div>
          </form>
        </div>
        <div className="col-md-3 mt-2"></div>
      </div>
    </div>
  );
}

export default EditPesanan;
