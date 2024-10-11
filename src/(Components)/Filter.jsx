'use client'
import React, { useState } from 'react';
import styles from '../(Styles)/filter.module.css'
import { Icon } from '@iconify/react'

function Filter() {

    const [isOpen, setIsOpen] = useState(true);
    const [OccasionOpen, setOccasionOpen] = useState(true);
    const [isWorkOpen, setIsWorkOpen] = useState(true);
    const [FabricOpen, setFabricOpen] = useState(true);
    const [SegmentOpen, setSegmentOpen] = useState(true);
    const [isSuitableForOpen, setIsSuitableForOpen] = useState(true);
    const [MaterialsOpen, setMaterialsOpen] = useState(true);
    const [isPatternOpen, setIsPatternOpen] = useState(true);

    // Handle toggle for each section
    const togglebtn = (section) => {
        switch (section) {
            case 'ideal':
                setIsOpen(!isOpen);
                break;
            case 'occasion':
                setOccasionOpen(!OccasionOpen);
                break;
            case 'work':
                setIsWorkOpen(!isWorkOpen);
                break;
            case 'fabric':
                setFabricOpen(!FabricOpen);
                break;
            case 'segment':
                setSegmentOpen(!SegmentOpen);
                break;
            case 'suitableFor':
                setIsSuitableForOpen(!isSuitableForOpen);
                break;
            case 'rawMaterials':
                setMaterialsOpen(!MaterialsOpen);
                break;
            case 'pattern':
                setIsPatternOpen(!isPatternOpen);
                break;
            default:
                break;
        }
    };


    return (
        <div >

            <div className={styles.customizable}>
                <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                <label htmlFor={styles.customizCheckBoz}>
                    <h5>CUSTOMIZABLE</h5>
                </label>
            </div>

            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('ideal')}>
                    <div>
                        <h4>IDEAL FOR</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isOpen &&
                    <div className={styles.dropDownContainer}>
                        <h4>Unselect all</h4>
                        <div className={styles.dropDownOptions}>
                            <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                            <label htmlFor={styles.customizCheckBoz}>
                                <h6 style={{ fontWeight: '400' }}>MEN</h6>
                            </label>
                        </div>
                        <div className={styles.dropDownOptions}>
                            <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                            <label htmlFor={styles.customizCheckBoz}>
                                <h6 style={{ fontWeight: '400' }}>WOMEN</h6>
                            </label>
                        </div>
                        <div className={styles.dropDownOptions}>
                            <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                            <label htmlFor={styles.customizCheckBoz}>
                                <h6 style={{ fontWeight: '400' }}>BABY & KIDS</h6>
                            </label>
                        </div>
                    </div>
                }
            </div>

            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('occasion')}>
                    <div>
                        <h4>OCCASION</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!OccasionOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>

            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('work')}>
                    <div>
                        <h4>WORK</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isWorkOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('fabric')}>
                    <div>
                        <h4>FABRIC</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!FabricOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('segment')}>
                    <div>
                        <h4>SEGMENT</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!SegmentOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('suitableFor')}>
                    <div>
                        <h4>SUITABLE FOR</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isSuitableForOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('rawMaterials')}>
                    <div>
                        <h4>RAW MATERIALS</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!MaterialsOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => togglebtn('pattern')}>
                    <div>
                        <h4>PATTERN</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isPatternOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>


        </div>
    )
}

export default Filter
