/**
 * Prattski
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA that can
 * be found on the web at the following URL:
 * http://store.prattski.com/LICENSE.txt
 *
 * @category    Prattski
 * @package     Prattski_Jquery
 * @copyright   Copyright (c) 2010-2011 Prattski (http://prattski.com/)
 * @license     http://store.prattski.com/LICENSE.txt
 */

/**
 * The below replaces jQuery's "$" with a "$J".
 *
 * Example Usage:
 *
 * $J(document).ready(function() {
 *     $J('<div id="mydiv">Hello World!</div>').appendTo($J('body'));
 *     $J('#mydiv').dialog();
 * });
 */
$J = jQuery.noConflict();