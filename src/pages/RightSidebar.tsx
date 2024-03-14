import React from "react";
import { Drawer, Upload, Button, Switch } from "antd";
import DrawerInput from "../components/DrawerInput";
import ViewInfofield from "../components/ViewInfofield";
// import { rowdata } from "../data";
import { EditOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../features/store.hooks";
import { addBlog, Blog, updateBlog } from "../features/slices/blog.slice";

// interface DrawerDataType {
//   key: string;
//   heading: string;
//   image: string;
//   title: string;
//   email: string;
//   address: string;
//   city: string;
//   organizername: string;
//   description: string;
//   phone: number;
//   totallike: number;
//   status: boolean;
//   date: string;
// }

type RigthsidebarProps = {
  drawerdata: Blog;
  setDrawerdata: any;
  isOpen: boolean;
  setIsOpen: any;
  heading: string;
};

const newobj = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
};

const RigthSidebar = ({
  isOpen,
  setIsOpen,
  drawerdata,
  setDrawerdata,
  heading,
}: RigthsidebarProps) => {
  const dispatch = useAppDispatch();

  const submitEditing = () => {
    dispatch(updateBlog(drawerdata));
    // blogs.map((blog: any) => {
    //   if (blog.key === drawerdata.id) {
    //     return drawerdata;
    //   } else {
    //     return blog;
    //   }
    // });
    setDrawerdata(newobj);
    setIsOpen(false);
  };

  const submitCreate = () => {
    dispatch(addBlog(drawerdata));
    // const newevent = {
    //   ...drawerdata,
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZof_FZRtmnOMMWtNarqAN0CPc0v0dwQ8DCw&usqp=CAU",
    //   id: rowdata.length + 1,
    //   status: true,
    //   totallike: 10,
    // };
    // blogs.push(newevent)
    setDrawerdata(newobj);
    setIsOpen(false);
  };

  const oncloseDrawer = () => {
    setDrawerdata(newobj);
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDrawerdata((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Drawer
      open={isOpen}
      title={heading}
      closable={true}
      maskClosable={true}
      onClose={oncloseDrawer}
    >
      {heading === "Edit Event" && (
        <>
          <DrawerInput
            drawerlabel="Event Title"
            name="title"
            placeholder="Enter Blog Title"
            value={drawerdata.title}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Description"
            name="description"
            placeholder="Description"
            value={drawerdata.description}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="E-mail"
            name="category"
            placeholder="Enter Email"
            value={drawerdata.category}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Phone"
            name="rating"
            placeholder="Enter Phone Number"
            value={drawerdata.rating}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Address"
            name="brand"
            placeholder="Enter Address"
            value={drawerdata.brand}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="City"
            name="category"
            placeholder="Enter City"
            value={drawerdata.category}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Organizer Name"
            name="brand"
            placeholder="Enter Organizer Name"
            value={drawerdata.brand}
            onChange={handleChange}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "25px",
              width: "100%",
              gap: "40px",
            }}
          >
            <label
              style={{
                maxWidth: "90px",
                width: "100%",
              }}
            >
              Image(Single & Multiple)
            </label>
            {/* <Upload.Dragger
              multiple
              listType="picture"
              showUploadList={{ showRemoveIcon: true }}
              itemRender={(file: any) => {
                return <p>{file.name}</p>;
              }}
              action={"http://localhost:3000/home"}
            >
              <img
                src={drawerdata.thumbnail}
                style={{ width: "75px", height: "75px" }}
                alt="existing picture"
              />
              <EditOutlined />
            </Upload.Dragger> */}
            <Upload>
              <img
                src={drawerdata.thumbnail}
                style={{
                  width: "127px",
                  height: "127px",
                  borderRadius: "11px",
                }}
                alt="existing picture"
              />
              {/* <Button
                style={{
                  border: "none",
                  background: "#D1D1D1",
                }}
                icon={<EditOutlined />}
              ></Button> */}
            </Upload>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "25px",
              width: "100%",
              gap: "40px",
            }}
          >
            <label
              style={{
                maxWidth: "90px",
                width: "100%",
              }}
            >
              Status
            </label>
            <Switch defaultChecked onChange={onChange} />
          </div>
          <DrawerInput
            drawerlabel="Publish Date & Time"
            name="price"
            placeholder="Select Date & Time"
            value={drawerdata.price}
            onChange={handleChange}
          />
          <div className="btndrawer">
            <Button className="cancelbtndrawer" onClick={oncloseDrawer}>
              Cancel
            </Button>
            <Button className="savebtndrawer" onClick={submitEditing}>
              Save
            </Button>
          </div>
        </>
      )}

      {heading === "Blog Info" && (
        <>
          <img
            className="infoimg"
            src={drawerdata.thumbnail}
            alt="event picture"
          />

          <ViewInfofield infolabel="Event Title" infovalue={drawerdata.title} />
          <ViewInfofield
            infolabel="Description"
            infovalue={drawerdata.description}
          />
          <ViewInfofield infolabel="E-mail" infovalue={drawerdata.category} />
          <ViewInfofield
            infolabel="Phone"
            infovalue={`+91 951081451${Math.floor(drawerdata.rating)}`}
          />
          <ViewInfofield infolabel="Address" infovalue={drawerdata.brand} />
          <ViewInfofield infolabel="City" infovalue={drawerdata.category} />
          <ViewInfofield
            infolabel="Oraganizer Name"
            infovalue={drawerdata.brand}
          />
          <ViewInfofield
            infolabel="Total Like"
            infovalue={Math.floor(drawerdata.discountPercentage).toString()}
          />
          <ViewInfofield
            infolabel="Status"
            infovalue={drawerdata.stock > 50 ? "true" : "false"}
          />
        </>
      )}

      {heading === "Create Event" && (
        <>
          <DrawerInput
            drawerlabel="Event Title"
            name="title"
            placeholder="Enter Blog Title"
            value={drawerdata.title}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Description"
            name="description"
            placeholder="Description"
            value={drawerdata.description}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="E-mail"
            name="category"
            placeholder="Enter Email"
            value={drawerdata.category}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Phone"
            name="rating"
            placeholder="Enter Phone Number"
            value={drawerdata.rating === 0 ? "" : drawerdata.rating}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Address"
            name="brand"
            placeholder="Enter Address"
            value={drawerdata.brand}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="City"
            name="category"
            placeholder="Enter City"
            value={drawerdata.category}
            onChange={handleChange}
          />
          <DrawerInput
            drawerlabel="Organizer Name"
            name="brand"
            placeholder="Enter Organizer Name"
            value={drawerdata.brand}
            onChange={handleChange}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "25px",
              width: "100%",
              gap: "40px",
            }}
          >
            <label
              style={{
                maxWidth: "90px",
                width: "100%",
              }}
            >
              Image(Single & Multiple)
            </label>
            <Upload>
              <Button
                style={{
                  border: "none",
                  background: "#D1D1D1",
                }}
                icon={<EditOutlined />}
              ></Button>
            </Upload>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "25px",
              width: "100%",
              gap: "40px",
            }}
          >
            <label
              style={{
                maxWidth: "90px",
                width: "100%",
              }}
            >
              Status
            </label>
            <Switch defaultChecked onChange={onChange} />
          </div>
          <DrawerInput
            drawerlabel="Publish Date & Time"
            name="price"
            placeholder="Select Date & Time"
            value={drawerdata.price === 0 ? "" : drawerdata.price}
            onChange={handleChange}
          />
          <div className="btndrawer">
            <Button className="cancelbtndrawer" onClick={oncloseDrawer}>
              Cancel
            </Button>
            <Button className="savebtndrawer" onClick={submitCreate}>
              Save
            </Button>
          </div>
        </>
      )}
    </Drawer>
  );
};

export default RigthSidebar;
