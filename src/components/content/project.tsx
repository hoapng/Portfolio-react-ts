import { Button, Modal } from "antd";
import { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight, BsInstagram, BsTwitter } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";
import { SiNestjs } from "react-icons/si";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    description: string;
    frontend: string;
    backend: string;
    member: number;
    role: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const dataProjects: IProject[] = [
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "WebQuiz",
      shortDescription: "Website Assign Quiz",
      detail: {
        description: "Website Assign Quiz", //miêu tả dự án làm gì
        frontend: "React", //công nghệ sử dụng
        backend: "Available API", //công nghệ sử dụng
        member: 1, // bao nhiêu members
        role: "FE Developer", // vai trò trong dự án
        github: "https://github.com/hoapng/base-react-redux/tree/prod", //link github,
      },
    },
    {
      image: <DiNodejsSmall size={50} color={"#00a80c"} />,
      title: "Twitter API Clone",
      shortDescription: "Twitter API Clone",
      detail: {
        description: "(Self-learning) Twitter API Clone", //miêu tả dự án làm gì
        frontend: "Available template", //công nghệ sử dụng
        backend: "Node.JS (Express) - Typescript, MongoDB", //công nghệ sử dụng
        member: 1, // bao nhiêu members
        role: "BE Developer", // vai trò trong dự án
        github: "https://github.com/hoapng/nodejs-typescript/tree/twitter", //link github,
      },
    },
    {
      image: <SiNestjs size={50} color={"#ea2845"} />,
      title: "Website FindJobs",
      shortDescription: "Website FindJobs",
      detail: {
        description: "(Self-learning) Website FindJobs", //miêu tả dự án làm gì
        frontend: "Available template", //công nghệ sử dụng
        backend: "Nest.JS (Express), MongoDB", //công nghệ sử dụng
        member: 1, // bao nhiêu members
        role: "BE Developer", // vai trò trong dự án
        github: "https://github.com/hoapng/nestjs-basic-master", //link github,
      },
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };
  return (
    <>
      <Modal
        title={dataDetail && dataDetail.title ? `${dataDetail.title}` : ""}
        open={isModalOpen}
        onOk={() => handleCloseModal}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Description: {dataDetail.detail.description}</li>
            <li>Frontend: {dataDetail.detail.frontend} </li>
            <li>Backend: {dataDetail.detail.backend}</li>
            <li>Member: {dataDetail.detail.member}</li>
            <li>Role: {dataDetail.detail.role}</li>
            <li>
              Github:
              <a href={dataDetail.detail.github} target="_blank">
                {dataDetail.detail.github}
              </a>
            </li>
          </ul>
        )}
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>My Projects</h3>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li key={`${index}-project`}>
                      <div
                        className="inner"
                        title="Details"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5px 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; Details
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
