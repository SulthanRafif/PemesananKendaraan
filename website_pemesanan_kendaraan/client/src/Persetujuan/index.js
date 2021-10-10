import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";

const schema = yup.object().shape({
  statusPersetujuan: yup.string().required("Status Persetujuan Harus Diisi"),
});

function Persetujuan(props) {
  useEffect(() => {
    console.log("Props Id Pemesanan: ", props.location.idPemesanan);
  }, [props.location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!errors.statusPersetujuan) {
      console.log("data status persetujuan ", data);
      if (props.location.levelUser === 1) {
        console.log("Level User Persetujuan 1");
        Axios.post("http://localhost:3001/api/update_persetujuan_1", {
          statusPersetujuan1: data.statusPersetujuan,
          idPemesanan: props.location.idPemesanan,
        }).then(
          console.log(
            "id pemesanan yang dimasukkan",
            props.location.idPemesanan
          )
        );
      } else if (props.location.levelUser === 2) {
        console.log("Level User Persetujuan 1");
        Axios.post("http://localhost:3001/api/update_persetujuan_2", {
          statusPersetujuan1: data.statusPersetujuan,
          idPemesanan: props.location.idPemesanan,
        }).then(
          console.log(
            "id pemesanan yang dimasukkan",
            props.location.idPemesanan
          )
        );
      }
    }
  };
  return (
    <div>
      <div className="container-fluid row mt-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-3">
              <label>Nama Pemesan</label>
              <div>{props.location.namaPemesan}</div>
            </div>
            <div className="form-group mt-3">
              <label>Nama Kendaraan</label>
              <div>{props.location.namaKendaraan}</div>
            </div>
            <div className="form-group mt-3">
              <label>Nama Penyetuju 1</label>
              <div>{props.location.namaPenyetuju1}</div>
            </div>
            <div className="form-group mt-3">
              <label>Status Persetujuan 1</label>
              <div>{props.location.statusPersetujuan1}</div>
            </div>
            <div className="form-group mt-3">
              <label>Nama Penyetuju 2</label>
              <div>{props.location.namaPenyetuju2}</div>
            </div>
            <div className="form-group mt-3">
              <label>Status Persetujuan 2</label>
              <div>{props.location.statusPersetujuan2}</div>
            </div>
            <div className="form-group mt-3">
              <label>Masukkan persetujuan</label>
              <select
                id="statusPersetujuan"
                {...register("statusPersetujuan", { required: true })}
                name="statusPersetujuan"
                defaultValue="1"
              >
                <option value="1">Belum Disetujui</option>
                <option value="2">Setuju</option>
              </select>
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

export default Persetujuan;
