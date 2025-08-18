import { Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../../services/Projects";

function ViewProjectDetails() {
  const projDetail = useSelector((state) => state.projects);
  const project = projDetail.projectDetails;
  const { id } = useParams();
  const dispatch = useDispatch();

  const initialValues = {
    name: project?.name || "",
    description: project?.description || "",
    members: project?.members || [],
  };

  useEffect(() => {
    if (id) {
      dispatch(getProjectById(id));
    }
  }, [dispatch, id]);

  return (
    <Formik initialValues={initialValues} enableReinitialize>
      {({ values }) => (
        <>
          <div className="row mt-3">
            <div className="col-2">
              <label>Project Name :</label>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12">
              <input
                name="name"
                className="form-control"
                disabled
                value={values.name}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-2">
              <label>Project Description :</label>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12">
              <textarea
                name="description"
                className="form-control"
                rows={3}
                disabled
                value={values.description}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-2">
              <label>Members</label>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12">
              <ul>
                {values.members.map((member, index) => (
                  <li key={index}>{member.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
}

export default ViewProjectDetails;
