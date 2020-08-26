import React from 'react';

const Charts = () => {
    return ( 
        <>
         <div class="row">
                            <div class="col-xl-8">
                                <div class="card">
                                    <div class="card-header py-3 bg-transparent">
                                        <div class="card-widgets">
                                            <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="index.html#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i class="mdi mdi-minus"></i></a>
                                            <a href="index.html#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h5 class="header-title mb-0">Weekly Sales Report</h5>
                                    </div>
                                    <div id="cardCollpase1" class="collapse show">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div id="bar-example" class="morris-charts" dir="ltr" ></div>
                                                    <div class="row text-center mt-4 mb-4">
                                                        <div class="col-sm-3 col-6">
                                                            <h5>$ 126</h5>
                                                            <small class="text-muted"> Today's Sales</small>
                                                        </div>
                                                        <div class="col-sm-3 col-6">
                                                            <h5>$ 967</h5>
                                                            <small class="text-muted">This Week's Sales</small>
                                                        </div>
                                                        <div class="col-sm-3 col-6">
                                                            <h5>$ 4500</h5>
                                                            <small class="text-muted">This Month's Sales</small>
                                                        </div>
                                                        <div class="col-sm-3 col-6">
                                                            <h5>$ 87,000</h5>
                                                            <small class="text-muted">This Year's Sales</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                               

                            </div>
                           

                            <div class="col-xl-4">
                                <div class="card">
                                    <div class="card-header py-3 bg-transparent">
                                        <div class="card-widgets">
                                            <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="index.html#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                            <a href="index.html#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h5 class="header-title mb-0"> Yearly Sales Report</h5>
                                    </div>
                                    <div id="cardCollpase2" class="collapse show">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div id="morris-line-example" class="morris-charts" dir="ltr" ></div>
                                                    <div class="row text-center mt-4">
                                                        <div class="col-sm-4">
                                                            <h5>$ 86,956</h5>
                                                            <small class="text-muted"> This Year's Report</small>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <h5>$ 86,69</h5>
                                                            <small class="text-muted">Weekly Sales Report</small>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <h5>$ 948,16</h5>
                                                            <small class="text-muted">Yearly Sales Report</small>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            

                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="status">
                                                    <h3 class="mt-2">61.5%</h3>
                                                    <p class="mb-1">US Dollar Share</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 mt-3">
                                                <span class="sparkpie-big"><canvas width="98" height="50" ></canvas></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
        </>
      );
}
 
export default Charts; 
       