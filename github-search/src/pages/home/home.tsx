import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";

import heroBox from "../../assets/images/heroBox.png";
import heroIcon from "../../assets/images/heroIcon.png";
import { SearchOutlined } from "@ant-design/icons";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const HomeComponent = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("inline");
  const [searchType, setSearchType] = useState<String>("user");

  const onFormLayoutChange = ({ search }: { search: String }) => {
    setSearchType(search);
  };

  const onFinish = () => {};

  const onFinishFailed = () => {};

  return (
    <React.Fragment>
      <header id="nav" className="sticky-nav">
        <nav className="w-container">
          <ul role="list" className="nav-grid w-list-unstyled">
            <li id="w-node-_1c63d8d5-d282-97aa-475c-4510fae2eec7-b89fae5a">
              <a href="#" className="nav-logo-link">
                <img src={heroIcon} width="14" alt="bg" className="nav-logo" />
              </a>
            </li>
            <li>
              <a href="/" aria-current="page" className="nav-link w--current">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/augustine-okade-mcsa-mcsd-devops-655b42a0/"
                target="_blank"
                className="nav-link"
              >
                About Okade
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <header id="hero" className="hero wf-section">
        <div className="flex-container w-container">
          <div className="div-block">
            <h1>
              Hi, I’m Okade!
              <br />
              Fullstack Engineer
            </h1>
            <p>
              Case Study: Create a React application that supports searching
              GitHub for both users and organizations.
            </p>
            <a href="#" className="w-button">
              Check my LinkedIn
            </a>
          </div>
          <div className="hero-image-mask">
            <img src={`${heroBox}`} alt="bg" className="hero-image" />
          </div>
        </div>
      </header>
      <section id="subscribe-form" className="subscribe-form wf-section">
        <div className="centered-container w-container">
          <h2>Subscribe form</h2>
          <p>
            This section uses a <strong>container</strong> element to ensure the
            content looks right on every device. It’s centered with the class
            “Centered Container.”
          </p>
          <div className="w-form">
            <Form
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
              onValuesChange={onFormLayoutChange}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label="Search By:" name="layout">
                <Radio.Group value={searchType} defaultValue="user">
                  <Radio.Button value="user">User</Radio.Button>
                  <Radio.Button value="organization">Organization</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Input placeholder="enter your search..." />
              </Form.Item>
              <Form.Item>
                <Button icon={<SearchOutlined />} type="primary" shape="round">
                  Search
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
      <section id="cards-section" className="cards-section wf-section">
        <div className="centered-container w-container">
          <h2>Cards section</h2>
          <p>
            Use these <strong>cards</strong> when you want to display content
            with an image, such as a blog post or product. They’re built with
            CSS grid to enable the 3-column layout. When you select the “Cards
            Grid Container,” you’ll see a red icon on the top right. Click the
            icon to edit the number of columns, the column gap, and more!
          </p>
          <p>
            The card images have <strong>fit</strong> set to{" "}
            <strong>cover</strong>, so they fill their masking container without
            stretching. Try making the “Cards Image Mask” a circle using
            <strong>border-radius</strong> or adjusting the size ratio using top{" "}
            <strong>padding</strong>. Don’t forget to set an{" "}
            <strong>alt</strong> description for each image, which will help
            with accessibility.
          </p>
          <div className="cards-grid-container">
            <div id="w-node-a2b34164-79bd-bcb4-ead8-c14038212691-b89fae5a">
              <div className="cards-image-mask">
                <img
                  src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"
                  alt="bg"
                  className="cards-image"
                />
              </div>
              <h3>Card one</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.{" "}
              </p>
            </div>
            <div id="w-node-a2b34164-79bd-bcb4-ead8-c14038212698-b89fae5a">
              <div className="cards-image-mask">
                <img
                  src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"
                  alt="bg"
                  className="cards-image"
                />
              </div>
              <h3 id="w-node-a2b34164-79bd-bcb4-ead8-c1403821269b-b89fae5a">
                Card two
              </h3>
              <p id="w-node-a2b34164-79bd-bcb4-ead8-c1403821269d-b89fae5a">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.{" "}
              </p>
            </div>
            <div id="w-node-a2b34164-79bd-bcb4-ead8-c1403821269f-b89fae5a">
              <div className="cards-image-mask">
                <img
                  src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"
                  alt="bg"
                  className="cards-image"
                />
              </div>
              <h3 id="w-node-a2b34164-79bd-bcb4-ead8-c140382126a2-b89fae5a">
                Card three
              </h3>
              <p id="w-node-a2b34164-79bd-bcb4-ead8-c140382126a4-b89fae5a">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer wf-section">
        <div className="w-container">
          <div className="footer-flex-container">
            <a href="#" className="footer-logo-link">
              <img src={heroIcon} alt="bg" className="footer-image" />
            </a>
          </div>
          <div className="text-block">
            © 2022 Okade Augustine - Github Search engine test. All rights
            reserved.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default HomeComponent;
