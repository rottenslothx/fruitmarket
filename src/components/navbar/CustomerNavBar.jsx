import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import userModel from "../../storage/users";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => <div></div>;

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    activeItem: "Home",
    username: "slothx",
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  activeMenuHome = () => this.setState({ activeItem: "Home" });
  activeMenuProduct = () => this.setState({ activeItem: "Product" });

  componentDidMount() {
    this.setState({ username: userModel.getActivedUser().email });
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 100, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item
                  as={Link}
                  to="/home"
                  active={this.state.activeItem === "Home"}
                  onClick={this.activeMenuHome}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/products"
                  active={this.state.activeItem === "Product"}
                  onClick={this.activeMenuProduct}
                >
                  รายการสินค้า
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/promotion"
                  active={this.state.activeItem === "Promotion"}
                  onClick={() => this.setState({ activeItem: "Promotion" })}
                >
                  โปรโมชั่น
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/refill"
                  active={this.state.activeItem === "Refill"}
                  onClick={() => this.setState({ activeItem: "Refill" })}
                >
                  เติมเงิน
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/basket"
                  active={this.state.activeItem === "Basket"}
                  onClick={() => this.setState({ activeItem: "Basket" })}
                >
                  <Button animated="vertical">
                    <Button.Content visible>ตะกร้า</Button.Content>
                    <Button.Content hidden>
                      <Icon name="shop" />
                    </Button.Content>
                  </Button>
                </Menu.Item>
                <Menu.Item position="right">
                  <p>{this.state.username}</p>
                </Menu.Item>
                <Menu.Item style={{ marginLeft: "0.5em" }}>
                  <Button
                    as={Link}
                    onClick={() => {
                      userModel.logout();
                      window.location.href = "/signin";
                    }}
                    inverted={!fixed}
                  >
                    Log out
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
          <Menu.Item as="a">รายการสินค้า</Menu.Item>
          <Menu.Item as="a">โปรโมชั่น</Menu.Item>
          <Menu.Item as="a">ตะกร้าสินค้า</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => <ResponsiveContainer></ResponsiveContainer>;

export default HomepageLayout;
