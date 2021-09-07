import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Lo-Fi is the best study music, no cappuccino',
    paragraph: 'Discord calls are super clutch when it comes to studying, even if it is with people who are in different classes. It is about the atmosphere you create to have fun and do well.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Family Guy, not the show you guys
                    </h4>
                  <p className="m-0 text-sm">
                    I have 8 siblings (I'm the middle child), 2 awesome parents, and I wouldn't trade it for anything
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Gamer Dan is the name
                    </h4>
                  <p className="m-0 text-sm">
                    if you want to get to know me, you're gonna have to play some games. Whether it's a board game, video game, or w/e. It could be legit anything, but if there isn't a game involved then idk how to talk to you ngl.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Boom.
                    </h4>
                  <p className="m-0 text-sm">
                    Bam. Bop. Badda-bop-boom. Pow. OHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Oh, I bid fairwell to the port and the land
                    </h4>
                  <p className="m-0 text-sm">
                  And I paddle away from brave England's white sands
To search for my long ago forgotten friends
To search for the place I hear all sailors end
As the souls of the dead fill the space of my mind
I'll search without sleeping 'til peace I can find
I fear not the weather, I fear not the sea
I remember the fallen, do they think of me?
When their bones in the ocean forever will be

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Obi-Wan Kenobi: You have allowed this dark lord to twist your mind, until now... until now you've become the very thing you swore to destroy.
                    </h4>
                  <p className="m-0 text-sm">
                  Anakin Skywalker: Don't lecture me, Obi-Wan! I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, freedom, justice, and security to my new Empire.
Obi-Wan Kenobi: Your new empire?
Anakin Skywalker: Don't make me kill you.
Obi-Wan Kenobi: Anakin, my allegiance is to the Republic, to democracy!
Anakin Skywalker: If you're not with me, then you're my enemy.
Obi-Wan Kenobi: Only a Sith deals in absolutes. I will do what I must.
Anakin Skywalker: You will try.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Workflow Shmirkflow, ya know what I mean???
                    </h4>
                  <p className="m-0 text-sm">
                    Sometimes you just gotta go with the flow, and other times you gotta rely on God.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;