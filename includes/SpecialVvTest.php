<?php
/**
 * VvTest special page
 *
 * @file
 * @ingroup Extensions
 * @copyright 2011-2020 VisualEditor Team and others; see AUTHORS.txt
 * @license MIT
 */

class SpecialVvTest extends SpecialPage {
	private $prefixes = [];

	/**
	 * @var null|Title
	 */
	private $title = null;

	/**
	 * @var null|ParserOutput
	 */
	private $output = null;

	public function __construct() {
		parent::__construct( 'VvTest' );
	}

	/**
	 * @inheritDoc
	 */
	public function execute( $subPage ) {
		$this->setHeaders();
		$this->checkPermissions();

		$output = $this->getOutput();
		$output->setPageTitle( 'VvTest: ' . $subPage );
		$output->addJsConfigVars( 'vvTestPageName', $subPage );
		$output->addModules( 'ext.vv.init' );
	}
}
