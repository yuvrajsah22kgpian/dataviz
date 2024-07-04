import './SideBar.css'; // Import your sidebar styles


const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>ALL</li>
        <li>Intensity</li>
        <li>Likelihood</li>
        <li>Relevance</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default SideBar;
