import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";

const schema = yup.object().shape({
  namaPemesan: yup.string().required("Nama Pemesan Harus Diisi"),
  namaKendaraan: yup.string().required("Nama Kendaraan Harus Diisi"),
  namaPenyetuju1: yup.string().required("Nama Penyetuju 1 Harus Diisi"),
  namaPenyetuju2: yup.string().required("Nama Penyetuju 2 Harus Diisi"),
  statusPersetujuan1: yup.string().required("Status Persetujuan 1 Harus Diisi"),
  statusPersetujuan2: yup.string().required("Status Persetujuan 2 Harus Diisi"),
});

function Persetujuan(props) {
  const [submit, setInfoSubmit] = useState("");
  useEffect(() => {
    console.log("Props Persetujuan: ", props.location);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // testing github

  const onSubmit = (data) => {
    if (
      !errors.namaPemesan &&
      !errors.namaKendaraan &&
      !errors.namaPenyetuju1 &&
      !errors.namaPenyetuju2 &&
      !errors.statusPersetujuan1 &&
      !errors.statusPersetujuan2
    ) {
      console.log("Data Submit Persetujuan: ", data);
    }
  };

  console.log("Error Submit Persetujuan", errors);
  return <div>Persetujuan</div>;
}

export default Persetujuan;
