import { motion } from 'framer-motion';
import { FiFolder, FiGithub } from 'react-icons/fi';
import { IoOpenOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MyInfo } from '../data/MyInfo';
import { WorkData } from '../data/WorkData';

const Works = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div
      className="works"
      id="works"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={fade}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">I build real value</p>
          <p className="heading-text">Works</p>
        </motion.div>

        <motion.div
          className="works-box"
          initial={{ opacity: 0 }}
          whileInView={fade}
        >
          {WorkData.map((w, index) => {
            return (
              <div key={index}>
                <Link
                  to={w.site}
                  target="_blank"
                  className="work-link-group"
                >
                  <div className="works-card">
                    <div className="works-container">
                      <div className="top-work">
                        <FiFolder className="work-folder" />
                        <div className="right">
                          {w.gitlink ? (
                            <Link
                              className="work-git"
                              to={w.gitlink}
                              target="_blank"
                            >
                              <FiGithub />
                            </Link>
                          ) : null}
                          <Link
                            className="work-link"
                            to={w.site}
                            target="_blank"
                          >
                            <IoOpenOutline />
                          </Link>
                        </div>
                      </div>
                      <div className="mid-work">
                        <p className="work-title">{w.title}</p>
                        <p className="work-desc">{w.desc}</p>
                      </div>
                      <div className="bottom-work">
                        {w.tech.map((e, index) => {
                          return <small key={index}>{e}</small>;
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="works-box pens"
          initial={{ opacity: 0 }}
          whileInView={fade}
        >
          <iframe
            height="300"
            style={{ width: '100%' }}
            title="cool header idea"
            src={`https://codepen.io/${MyInfo.codepenUsername}/embed/MWXjGqd?default-tab=html%2Cresult`}
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          />
          <button className="uiverse_btn">
            <a
              target="_blank"
              rel="noopener"
              href={`https://codepen.io/${MyInfo.codepenUsername}/pen/MWXjGqd`}
            >
              <span>cool header idea</span>
            </a>{' '}
          </button>
          <iframe
            height="300"
            style={{ width: '100%', marginTop: '1rem' }}
            title="CodePen Home"
            src={`https://codepen.io/${MyInfo.codepenUsername}/embed/rNKLBMm?default-tab=html%2Cresult`}
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          />

          <button className="uiverse_btn">
            <a
              target="_blank"
              rel="noopener"
              href={`https://codepen.io/${MyInfo.codepenUsername}/pen/ExLqvMP`}
            >
              <span>Animated Gradient Text CSS</span>
            </a>{' '}
          </button>
        </motion.div>

        <div className="more-link">
          <a
            href={MyInfo.codepen}
            target="_blank"
            rel="noopener"
          >
            See All &#8594;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
