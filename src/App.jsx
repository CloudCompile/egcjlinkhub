// src/App.jsx
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import Iridescence from './components/Iridescence';
import { userData, links } from './utils/data';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={true}
        amplitude={0.1}
        speed={1.0}
      />
      <div className="min-h-screen w-full flex flex-col items-center py-8 px-4 relative z-10 text-white">
        <div className="w-full max-w-md mx-auto">
          <Profile 
            avatar={userData.avatar}
            name={userData.name}
            bio={userData.bio}
          />
          
          <div className="mt-8 space-y-4">
            {links.map((link, index) => (
              <LinkButton
                key={index}
                url={link.url}
                title={link.title}
                icon={link.icon}
              />
            ))}
          </div>
          
          <Footer 
            socialLinks={userData.socialLinks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;