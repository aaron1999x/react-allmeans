import React from "react";

export const Body = () => {
  return (
    <div>
      <div className="container-fluid py-2 px-5">
        <div className="row m-2 border border-light">
          <div className="col-lg-5 mt-4  border-light border-end ">
            <div className="left-detail">
              <div className="head row align-items-center">
                <span className="fw-bold col">Catogery</span>
                <div className="left-button col">
                  <a
                    href="#preview"
                    className="btn btn-light  py-1 my-2 ms-5 rounded-pill"
                  >
                    Preview
                  </a>
                </div>
                <div className="left-button col">
                  <a
                    href="#savenpublish"
                    className="save btn btn-light  py-1 my-2 rounded-pill"
                  >
                    Save and publish
                  </a>
                </div>
              </div>

              <div class="input-group w-50">
                <select
                  class="form-select my-2 bg-light "
                  id="inputGroupSelect01"
                >
                  <option selected>Choose...</option>
                  <option value="1">Agricultural & Science </option>
                  <option value="2">Art & Design</option>
                  <option value="3">Business</option>
                  <option value="4">Economics</option>
                  <option value="5">Finance</option>
                  <option value="6">Healthcare</option>
                  <option value="7">Technology</option>
                </select>
              </div>

              <div>
                <label htmlFor="proj-desc" class="fw-bold col my-3">
                  Project Description
                </label>
                <textarea
                  class="form-control w-75 bg-light"
                  id="proj-desc"
                  rows="5"
                ></textarea>
              </div>

              <div>
                <label htmlFor="inputGroupFile02" class="fw-bold col my-3">
                  Project Cover Image
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile02"
                ></input>
              </div>

              <div>
                <label class="fw-bold col my-3">
                  Tools used, Software or Skills
                </label>
                <textarea
                  class="form-control w-75 bg-light"
                  id="tags"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-4">
            <div className="right-detail">
              <div className="row ms-5">
                <div className="col">
                  <span className="fw-bold fs-5 row">Upload Attachement</span>
                  <span className="row fs-6 fw-bold text-black-50">
                    Drag around to arrage order of attachments
                  </span>
                </div>
                <div className="col">
                  <span className="fw-bold fs-6 row">Links</span>
                  <input
                    class="form-control form-control-sm row w-75 bg-light"
                    type="text"
                    placeholder="Insert Links here"
                    aria-label=".form-control-sm example"
                  ></input>
                </div>
              </div>

              <img
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                class="rounded float-start w-25 h-25 ms-5 my-3"
                alt="pc"
              />
              <img
                src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                class="rounded float-center w-25 h-25 mx-2 my-3"
                alt="pc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
