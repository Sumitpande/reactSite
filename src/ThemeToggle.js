import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <FontAwesomeIcon icon={solid('sun')} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer" />
                
            ) : (
                    <FontAwesomeIcon
                    icon={solid('moon')}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;