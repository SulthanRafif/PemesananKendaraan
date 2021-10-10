import React from "react";

function DeletePesanan(props) {
  const hapus = () => {
    console.log("Delete Pesanan");
  };
  return (
    <div
      className="modal fade"
      id="modalDeletePesanan"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Hapus Pesanan
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Apakah anda ingin menghapus pesanan dengan ID {props.nomorPesanan}
              ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Tidak
              </button>
              <button
                type="button"
                onClick={hapus}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePesanan;
