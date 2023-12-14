import { hashSync } from "bcryptjs";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  function handle(obj) {
    if (obj.password !== obj.password1) alert("Passwords not matching");
    else {
      let result = hashSync(obj.password, 3);
      obj.password = result;
      obj.password1 = result;
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj),
      }).then((res) => {
        if (res.status === 201) navigate("/login");
      });
    }
  }

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit(handle)} className="d-grid">
        <h1 className="text-primary-emphasis text-center mx-auto text-decoration-underline mb-3">
        Event Registration Form
        </h1>
        <div className="row">
          <div className="col-6">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("firstname", { required: true })}
            />
            {errors.firstname?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Faculty Coordinator 1</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("lastname", { required: true })}
            />
            {errors.lastname?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Faculty Coordinator 2</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("lastname", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 1</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("lastname", { required: true })}
            />
            {errors.lastname?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 1 Phone number</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("phone", { required: true })}
            />
            {errors.phone?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 2</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("lastname", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 2 Phone number</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("phone", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Start date</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">End date</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("email", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Time</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Handles</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("email", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Registration Link</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("email", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Team Size</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("email", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Image Link</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div>
          {/* <div className="col-6">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control w-75"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">Required</p>
            )}
          </div> */}
          </div>
      </form>
    </div>
  );
}

export default Register;
