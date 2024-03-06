import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  removePost,
  setView,
  submitFeedback,
  toggleView,
} from "../redux/actions/actions";
import Card from "../components/Card";
import FeedbackForm from "../components/FeedbackForm";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import ToggleButton from "../components/ToggleButton";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons"; // Import icons
import cftomorrow from "../Images/code-for-tomorrow.png";
import "../styles/styles.css";
import Modal from "../components/Modal";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const view = useSelector((state) => state.view);
  const loading = useSelector((state) => state.loading);
  const [isListView, setListView] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchPosts());
    setTimeout(() => {
      dispatch(setView(1));
    }, 5000);
  }, [dispatch]);

  const handleRemove = (postId) => {
    dispatch(removePost(postId));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setView(pageNumber));
  };

  const handleToggleView = () => {
    dispatch(toggleView());
    setListView(!isListView);
  };

  const handleFeedbackSubmit = (feedbackData) => {
    dispatch(submitFeedback(feedbackData));
  };
  return (
    <div className="container-fluid">
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-md-3">
            <div>
              <div className="profile-with-tagline d-flex align-items-center design-box justify-content-center">
                <img src={cftomorrow} alt="Description of your image" />
                <div>
                  <h5 className="fw-bold">Hi Reader,</h5>
                  <p>Here's your News!</p>
                </div>
              </div>
              <div className="text-center design-box">
                <h3>View Toggle</h3>
                <ToggleButton
                  onClick={handleToggleView}
                  isToggled={isListView}
                />
                {/* <FeedbackForm onSubmit={handleFeedbackSubmit} /> */}
              </div>
              <div className="text-center design-box">
                <h3>Have a Feedback?</h3>
                <div>
                  <button className="btn btn-primary" onClick={openModal}>
                    Open Modal
                  </button>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className={`row ${isListView ? "flex-column" : "flex-wrap"}`}>
              {posts.slice((view - 1) * 6, view * 6).map((post) => (
                <div
                  key={post.id}
                  className={`col-${isListView ? "12" : "4"}`}
                  style={{ marginBottom: "30px" }}
                >
                  <Card post={post} onRemove={handleRemove} />
                </div>
              ))}
            </div>
            <Pagination
              totalItems={posts.length}
              itemsPerPage={6}
              activePage={view}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
