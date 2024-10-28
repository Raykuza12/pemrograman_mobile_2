import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-lg shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Hubungi Saya</h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pesan</span>
              </label>
              <textarea
                placeholder="Your message"
                className="textarea textarea-bordered"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Kirim Pesan{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
