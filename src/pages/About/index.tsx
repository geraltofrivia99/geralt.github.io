import React, { createRef } from 'react';
import classNames from 'classnames';
import { Section } from './Section';
import './styles.css';

import { images } from '../../global';

interface State {
  inactive: boolean;
  activeCont: boolean;
}

export default class About extends React.PureComponent<State> {
  public state = {
    inactive: true,
    activeCont: false
  };

  public Input = createRef<HTMLDivElement>();

  public componentDidMount() {
    setTimeout(() => {
      this.setState({ inactive: false });
    }, 200);
  }

  public setActiveCont = (value: boolean) => {
    // const { activeCont } = this.state;
    // if (activeCont) return;
    this.setState({ activeCont: value });
  };

  public render(): React.ReactNode {
    const { inactive, activeCont } = this.state;
    const contClass = classNames('cont', {
      's--inactive': inactive,
      's--el-active': activeCont
    });
    return (
      <div className={contClass}>
        <div className="cont__inner">
          <Section
            title="Angular"
            description="Angular"
            index={1}
            func={this.setActiveCont}
            logo={images.angLogo}
          />
          <Section
            title="GraphQl"
            description="GraphQl"
            index={1}
            func={this.setActiveCont}
            logo={images.graphLogo}
          />
          <Section
            title="Angular"
            description="Angular"
            index={1}
            func={this.setActiveCont}
            logo={images.graphLogo}
          />
          <Section
            title="Angular"
            description="Angular"
            index={1}
            func={this.setActiveCont}
            logo={images.graphLogo}
          />
          <Section
            title="Angular"
            description="Angular"
            index={1}
            func={this.setActiveCont}
            logo={images.graphLogo}
          />
        </div>
      </div>
    );
  }
}
