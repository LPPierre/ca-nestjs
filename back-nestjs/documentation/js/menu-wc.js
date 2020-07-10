'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ca-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-87eef28eb8039488133c103218526c12"' : 'data-target="#xs-controllers-links-module-AppModule-87eef28eb8039488133c103218526c12"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-87eef28eb8039488133c103218526c12"' :
                                            'id="xs-controllers-links-module-AppModule-87eef28eb8039488133c103218526c12"' }>
                                            <li class="link">
                                                <a href="controllers/BoxesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoxesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CreaturesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreaturesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TrainersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrainersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-87eef28eb8039488133c103218526c12"' : 'data-target="#xs-injectables-links-module-AppModule-87eef28eb8039488133c103218526c12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-87eef28eb8039488133c103218526c12"' :
                                        'id="xs-injectables-links-module-AppModule-87eef28eb8039488133c103218526c12"' }>
                                        <li class="link">
                                            <a href="injectables/BoxesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BoxesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreaturesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CreaturesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TrainersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TrainersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/BoxesController.html" data-type="entity-link">BoxesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CreaturesController.html" data-type="entity-link">CreaturesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TrainersController.html" data-type="entity-link">TrainersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Box.html" data-type="entity-link">Box</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoxRepository.html" data-type="entity-link">BoxRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBoxDto.html" data-type="entity-link">CreateBoxDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCreatureDto.html" data-type="entity-link">CreateCreatureDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTrainerDto.html" data-type="entity-link">CreateTrainerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Creature.html" data-type="entity-link">Creature</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatureRepository.html" data-type="entity-link">CreatureRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/MoveCreatureDto.html" data-type="entity-link">MoveCreatureDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trainer.html" data-type="entity-link">Trainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrainerRepository.html" data-type="entity-link">TrainerRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BoxesService.html" data-type="entity-link">BoxesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreaturesService.html" data-type="entity-link">CreaturesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrainersService.html" data-type="entity-link">TrainersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});