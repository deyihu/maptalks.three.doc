import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Custom Graphics Components',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      you can extend BaseObject to custom your Graphics Components
      </>
    ),
  },
  {
    title: 'High Performance',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
     Points/Lines/ExtrudePolygons Provides a very good rendering performance, can support hundreds of
              thousands
              of levels of data
      </>
    ),
  },
  {
    title: '3D',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       3D Map.You can make the most of threejs
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
