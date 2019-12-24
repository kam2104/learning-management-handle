import React from "react"
import { Layout, Menu, Icon,  } from "antd"
import { Switch, Route, NavLink } from "react-router-dom"

const {  Content, Sider } = Layout

const Main = ()=>{
  return(
    <div className="App">
        <Layout>
          <Layout style={{ padding: "0px 0", background: "#fff" }}>
            <Sider
              collapsedWidth="0"
              onBreakpoint={broken => {
               console.log(broken)
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
              }}
              width={200}
              style={{ background: "#eee" }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["2"]}
                defaultOpenKeys={["2"]}
                style={{ height: "100%" }}
              >


                <div style={{ marginTop:20,padding:10 }}>
                  <p style={{ fontSize: 15,textAlign:"center" }}>
                    <strong>Kameshwar</strong>
                  </p>
                </div>

                <Menu.Item key="2">
                  <NavLink to="/attendance">
                    <span>
                      <Icon type="font-colors" />
                    </span>{" "}
                    Something
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="3">
                  <NavLink to="/schoolCalendar">
                    <span>
                      <Icon type="calendar" />
                    </span>{" "}
                    Module
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                  <NavLink to="/communication">
                    <span>
                      <Icon type="api" />
                    </span>{" "}
                    sometthing
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="20">
                  <NavLink to="/">
                    <span>
                      <Icon type="logout" />
                    </span>{" "}
                    Logout
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Sider>

            <Content style={{ padding: "12px 12px", minHeight: 280 }}>
              <Switch>
                {/* <Route path="/main/module" exact component={Module} /> */}

              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
  )
}

export default Main
