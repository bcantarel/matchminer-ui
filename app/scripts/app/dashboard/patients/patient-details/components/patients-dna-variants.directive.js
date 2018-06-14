/*
 * Copyright (c) 2017. Dana-Farber Cancer Institute. All rights reserved.
 *
 *  Licensed under the GNU Affero General Public License, Version 3.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *
 * See the file LICENSE in the root of this repository.
 *
 * Contributing authors:
 * - berndvdveen
 *
 */

/**
 * Generate a tiered variants table
 */
angular.module('matchminerUiApp')
	.directive('patientDnaTieredVariants', function () {
		return {
			restrict: "E",
			replace: true,
			scope: {
				category: '=',
				tieredVariants: '=',
				tooltip: '&',
				pmTooltip: '&',
				isOncologist: '=',
				dtOpts: '='
			},
			templateUrl: 'scripts/app/dashboard/patients/patient-details/templates/dna-variants.html'
		}
	});
