import React, {
    ChangeEvent,
} from 'react';
import autobind from 'autobind-decorator';

type Props = {
    placeholder: string,
    className: string,
    onChange: (value: string) => void,
    value: string
};

export class Input extends React.Component<Props> {
    @autobind onChange(e: ChangeEvent<HTMLInputElement>) {
        const {onChange} = this.props;

        onChange(e.target.value);
    }

    render() {
        return (
            <input
                {...this.props}
                onChange={this.onChange}
            />
        );
    }
}
