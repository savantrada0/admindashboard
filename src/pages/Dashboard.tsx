import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
  FileAddOutlined,
  InfoCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Input, Switch, Modal, Table, Button, Select } from "antd";
import {} from "antd";
import "../assets/dashboardstyle.css";
import type { ColumnsType } from "antd/es/table";
import type { PaginationProps } from "antd";
// import { rowdata } from "../data";
import RigthSidebar from "./RightSidebar";
import {
  deleteBlog,
  getBlog,
  getBlogs,
  searchBlog,
  getfilterBlog,
  getBlogbyBrand,
} from "../features/slices/blog.slice";
import { useAppSelector, useAppDispatch } from "../features/store.hooks";
import { Blog } from "../features/slices/blog.slice";

// interface DataType {
//   key: string;
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

// interface DrawerDataType {
//   heading: string;
//   key: string;
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

const initailState = {
  // heading: "",
  // key: "",
  // image: "",
  // email: "",
  // address: "",
  // city: "",
  // organizername: "",
  // phone: 0,
  // totallike: 0,
  // status: false,
  // date: "",
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

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [heading, setHeading] = useState("");
  const [drawerdata, setDrawerdata] = useState<Blog>(initailState);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchedText, setSearchedText] = useState<string>("");
  const [category, setCategory] = useState("Categories");
  const [brandname, setBrandname] = useState("Brand");
  const dispatch = useAppDispatch();

  const { blogs, loading, brandlist }: any = useAppSelector(
    (state) => state.blogs,
  );

  useEffect(() => {
    dispatch(getBlogs({ limit: pageSize, skip: (page - 1) * pageSize }));
  }, [page, pageSize]);

  useEffect(() => {
    if (searchedText !== "") {
      dispatch(searchBlog(searchedText));
      setCategory("Categories");
      setBrandname("Brand");
    } else {
      dispatch(getBlogs({ limit: pageSize, skip: (page - 1) * pageSize }));
      setCategory("Categories");
      setBrandname("Brand");
    }
  }, [searchedText]);

  const onDeleteBlog = (record: any) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this blog record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch(deleteBlog(record.id));
      },
    });
  };

  const onEditBlog = (record: any) => {
    setDrawerdata({
      id: record.id,
      title: record.title,
      description: record.description,
      price: record.price,
      discountPercentage: record.discountPercentage,
      rating: record.rating,
      stock: record.stock,
      brand: record.brand,
      category: record.category,
      thumbnail: record.thumbnail,
      images: record.images,
    });
    setHeading("Edit Event");
    setIsOpen(true);
  };

  const onViewBlog = (record: any) => {
    setDrawerdata({
      id: record.id,
      title: record.title,
      description: record.description,
      price: record.price,
      discountPercentage: record.discountPercentage,
      rating: record.rating,
      stock: record.stock,
      brand: record.brand,
      category: record.category,
      thumbnail: record.thumbnail,
      images: record.images,
    });
    setHeading("Blog Info");
    dispatch(getBlog(record.id));
    setIsOpen(true);
  };

  const oncreateBlog = () => {
    setHeading("Create Event");
    setIsOpen(true);
  };

  const columns: ColumnsType<Blog> = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: 70,
      fixed: "left",
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      width: 150,
      render: (thumbnail) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {thumbnail === "image1" ? (
              <p
                style={{ background: "#D9D9D9", width: "80px", height: "80px" }}
              >
                {" "}
              </p>
            ) : (
              <img
                style={{ width: "80px", height: "80px" }}
                src={thumbnail}
                alt="can not render image"
              />
            )}
          </div>
        );
      },
      key: "thumbnail",
    },
    {
      title: "Title",
      width: "15%",
      dataIndex: "title",
      key: "title",
      // filteredValue: [searchedText],
      // onFilter: (value, record) => {
      //   const val = value.toString();
      //   return String(record.title).toLowerCase().includes(val.toLowerCase());
      // },
    },
    {
      title: "Description",
      width: "20%",
      dataIndex: "description",
      key: "description",
      render: (description) => {
        const size = description.length;
        if (size > 65) {
          return <p>{description.substring(0, 65)}...</p>;
        } else {
          return <p>{description}</p>;
        }
      },
    },
    {
      title: "Phone",
      width: 150,
      dataIndex: "rating",
      key: "rating",
      render: (rating) => {
        return <p>+91 951081451{parseInt(rating)}</p>;
      },
    },
    {
      title: "Total Like",
      width: 150,
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      render: (discountPercentage) => {
        return <p>{parseInt(discountPercentage)}</p>;
      },
    },
    {
      title: "Status",
      width: 150,
      dataIndex: "stock",
      key: "stock",
      render: (stock) => {
        const onToggle = () => {
          if (stock > 50) {
            stock = 45;
          } else {
            stock = 55;
          }
        };
        return <Switch checked={stock > 50} onChange={onToggle} />;
      },
    },
    {
      title: "Actions",
      width: 140,
      key: "actions",
      fixed: "right",
      render: (record) => {
        return (
          <>
            <InfoCircleOutlined
              style={{ cursor: "pointer" }}
              onClick={() => {
                onViewBlog(record);
              }}
            />
            <EditOutlined
              onClick={() => {
                onEditBlog(record);
              }}
              style={{ marginLeft: 12, cursor: "pointer" }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteBlog(record);
              }}
              style={{ marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const items = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  const showTotal: PaginationProps["showTotal"] = (total, range) =>
    `${range[0]}-${range[1]} of ${total} items`;

  const filterdata = (value: string) => {
    setCategory(value);
    setBrandname("Brand");
    if (value !== "all") {
      dispatch(getfilterBlog(value));
    } else {
      dispatch(getBlogs({ limit: 10, skip: 0 }));
      setPageSize(10);
      setPage(1);
    }
  };

  const filterbybrand = (value: string) => {
    setBrandname(value);
    dispatch(getBlogbyBrand(value));
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-inner">
          <div className="searchbar">
            <Input
              size="large"
              placeholder="Search by title"
              prefix={<SearchOutlined />}
              value={searchedText}
              onChange={(e) => setSearchedText(e.target.value)}
            />
            {/* <Dropdown menu={{ items }} placement="bottom">
              <Button className="filterbtn">
                Categories <ArrowDownOutlined />
              </Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottom">
              <Button className="filterbtn">
                Brand <ArrowDownOutlined />
              </Button>
            </Dropdown> */}
            <Select
              showArrow={true}
              showSearch={false}
              value={category}
              onChange={(value) => {
                filterdata(value);
              }}
              options={items.map((item) => {
                return { label: item, value: item };
              })}
              className="filterbtn"
            />
            <Select
              showArrow={true}
              showSearch={false}
              value={brandname}
              onChange={(value) => {
                filterbybrand(value);
              }}
              options={brandlist.map((brand: string) => {
                return { label: brand, value: brand };
              })}
              className="filterbtn"
            />
            <Button
              type="primary"
              className="addbutton"
              icon={<FileAddOutlined />}
              onClick={() => {
                oncreateBlog();
              }}
            >
              Create
            </Button>
          </div>
          <div className="table">
            <Table
              loading={loading}
              columns={columns}
              dataSource={blogs.products}
              pagination={{
                showSizeChanger: true,
                pageSize: pageSize,
                total: blogs.total,
                current: page,
                showTotal: showTotal,
                onChange: (page, pageSize) => {
                  setPageSize(pageSize);
                  setPage(page);
                },
              }}
              rowKey={(obj) => obj.id}
              scroll={{ x: 1200, y: 520 }}
            />
            <RigthSidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              drawerdata={drawerdata}
              heading={heading}
              setDrawerdata={setDrawerdata}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
