const Refresh = () => {
    if (useLocation().pathname) {
      window.location.reload();
    }
  };
  export default Refresh;