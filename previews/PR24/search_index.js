var documenterSearchIndex = {"docs":
[{"location":"tutorials/intro_page/#Examples","page":"Tutorials","title":"Examples","text":"","category":"section"},{"location":"quick_start_guide/#Quick-Start-Guide","page":"Quick Start Guide","title":"Quick Start Guide","text":"","category":"section"},{"location":"quick_start_guide/","page":"Quick Start Guide","title":"Quick Start Guide","text":"PRASInterface.jl is structured to enable stuff","category":"page"},{"location":"api/internal/#Internal-API","page":"Internal API Reference","title":"Internal API","text":"","category":"section"},{"location":"api/internal/","page":"Internal API Reference","title":"Internal API Reference","text":"Modules = [PRASInterface, PRAS]\nPublic = false","category":"page"},{"location":"api/internal/#PRASInterface.CC_RESTRICTIONS_UTIL_FILE","page":"Internal API Reference","title":"PRASInterface.CC_RESTRICTIONS_UTIL_FILE","text":"FILE with restrictions on CC units in PRAS\n\n\n\n\n\n","category":"constant"},{"location":"api/internal/#PRASInterface.HVDCLineTypes","page":"Internal API Reference","title":"PRASInterface.HVDCLineTypes","text":"Supported DC branch Types\n\n\n\n\n\n","category":"type"},{"location":"api/internal/#PRASInterface.OUTAGE_INFO_FILE","page":"Internal API Reference","title":"PRASInterface.OUTAGE_INFO_FILE","text":"DEFAULT outage data which is used when outage_flag is set to FALSE\n\nBased on ERCOT historical data\n\n\n\n\n\n","category":"constant"},{"location":"api/internal/#PRASInterface.TransformerTypes","page":"Internal API Reference","title":"PRASInterface.TransformerTypes","text":"Supported Transformer Types\n\n\n\n\n\n","category":"constant"},{"location":"api/internal/#PRASInterface.S2P_metadata","page":"Internal API Reference","title":"PRASInterface.S2P_metadata","text":"S2P_metadata\n\nStruct to store metadata for the Sienna to PRAS conversion\n\n\n\n\n\n","category":"type"},{"location":"api/internal/#PRASInterface.outage_data","page":"Internal API Reference","title":"PRASInterface.outage_data","text":"outage_data\n\nStruct to store the outage information for a component.\n\n\n\n\n\n","category":"type"},{"location":"api/internal/#PRASInterface.check_file-Tuple{String}","page":"Internal API Reference","title":"PRASInterface.check_file","text":"check_file(loc::String)\n\nCheck if the file exists and is openable.\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.get_available_components_in_aggregation_topology-Tuple{Type{<:PowerSystems.StaticInjection}, PowerSystems.System, PowerSystems.AggregationTopology}","page":"Internal API Reference","title":"PRASInterface.get_available_components_in_aggregation_topology","text":"get_available_components_in_aggregation_topology(\n    type::Type{<:PSY.StaticInjection},\n    sys::PSY.System,\n    region::PSY.AggregationTopology,\n)\n\nGet available components in the AggregationTopology region of the given type.\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.get_first_ts-Tuple{TS} where TS<:Channel{Any}","page":"Internal API Reference","title":"PRASInterface.get_first_ts","text":"get_first_ts(ts::TS)\n\nGet time series and handle components with no time series (such as unavailable)\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.get_generator_category-Tuple{PowerSystems.StaticInjection}","page":"Internal API Reference","title":"PRASInterface.get_generator_category","text":"get_generator_category(gen::StaticInjection)\n\nGet the category of the generator.\n\nArguments\n\ngen::StaticInjection: Generator\n\nReturns\n\nString: Category of the generator\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.get_sorted_lines-Tuple{Vector{PowerSystems.Branch}, Vector{String}}","page":"Internal API Reference","title":"PRASInterface.get_sorted_lines","text":"get_sorted_lines(lines::Vector{PSY.Branch}, region_names::Vector{String})\n\nGet sorted lines, interface region indices, and interface line indices.\n\nArguments\n\nlines::Vector{PSY.Branch}: Lines\nregion_names::Vector{String}: Region names\n\nReturns\n\nsorted_lines::Vector{PSY.Branch}: Sorted lines\ninterface_reg_idxs::Vector{Tuple{Int, Int}}: Interface region indices\ninterface_line_idxs::Vector{UnitRange{Int}}: Interface line indices\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.get_sorted_region_tuples-Tuple{Vector{PowerSystems.Branch}, Vector{String}}","page":"Internal API Reference","title":"PRASInterface.get_sorted_region_tuples","text":"get_sorted_region_tuples(lines::Vector{PSY.Branch}, region_names::Vector{String})\n\nGet sorted (regfrom, regto) tuples of inter-regional lines.\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.get_timestamps-Union{Tuple{TIMEPERIOD}, Tuple{Dates.DateTime, TIMEPERIOD, Int64, Int64}} where TIMEPERIOD<:Dates.TimePeriod","page":"Internal API Reference","title":"PRASInterface.get_timestamps","text":"get_timestamps(initial_time, resolution, steps, horizon)\n\nReturn a vector of timestamps starting from initial_time with resolution and steps for horizon steps\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.get_ts_values-Tuple{InfrastructureSystems.TimeSeriesData}","page":"Internal API Reference","title":"PRASInterface.get_ts_values","text":"get_ts_values(ts::PSY.TimeSeriesData)\n\nGet the time series values.\n\nArguments\n\nts::TimeSeries: Time series\n\nReturns\n\nArray{Float64}: Time series values\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.initialize_availability!-Tuple{Random.AbstractRNG, Vector{Bool}, Vector{Int64}, Vector{PowerSystems.Generator}, Int64}","page":"Internal API Reference","title":"PRASInterface.initialize_availability!","text":"initializeavailability!(rng, availability, nexttransition, devices, tlast)\n\nArguments\n\nrng::Random.AbstractRNG: Random number generator\navailability::Vector{Bool}: Vector of availability status\nnexttransition::Vector{Int}: Vector of next transition time\ndevices::Vector{PSY.Generator}: Vector of devices with supplemental attributes\nt_last::Int: Last time step\n\nReturns\n\nModifies input arguments and rereturns\n\navailability::Vector{Bool}: Vector of availability status\nnexttransition::Vector{Int}: Vector of next transition time\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.line_rating-Tuple{PowerSystems.Branch}","page":"Internal API Reference","title":"PRASInterface.line_rating","text":"line_rating(line::Branch)\n\nGet the line rating.\n\nArguments\n\nline::Branch: Line\n\nReturns\n\nTuple{forward_capacity::Float64, backward_capacity::Float64}: Line rating\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.make_pras_interfaces-Tuple{Vector{PowerSystems.Branch}, Vector{Tuple{Int64, Int64}}, Vector{UnitRange{Int64}}, PRASInterface.S2P_metadata}","page":"Internal API Reference","title":"PRASInterface.make_pras_interfaces","text":"make_pras_interfaces(\n    sorted_lines::Vector{PSY.Branch},\n    interface_reg_idxs::Vector{Tuple{Int64, Int64}},\n    interface_line_idxs::Vector{UnitRange{Int64}},\n    s2p_meta::S2P_metadata,\n)\n\nConverts PSY branches and interaces indices into PRAS Lines and Interfaces.\n\nReturns\n\nnew_lines::PRAS.Lines: PRAS Lines\nnew_interfaces::PRAS.Interfaces: PRAS Interfaces\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.rate_to_probability-Tuple{Float64, Int64}","page":"Internal API Reference","title":"PRASInterface.rate_to_probability","text":"rate_to_probability(for_gen::Float64, mttr::Int64)\n\nConverts the forced outage rate and mean time to repair to the λ and μ parameters\n\nArguments\n\nfor_gen::Float64: Forced outage rate [1/T]\nmttr::Int64: Mean time to repair [T]\n\nReturns\n\nλ::Float64: Transition probability from online to offline [1/T]\nμ::Float64: Transition rate from offline to online [1/T]\n\nReference\n\nhttps://core.ac.uk/download/pdf/13643059.pdf\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.runchecks-Tuple{String}","page":"Internal API Reference","title":"PRASInterface.runchecks","text":"runchecks(sys_location::String)\n\nCheck if the System JSON file is serialized as well as other files required.\n\n\n\n\n\n","category":"method"},{"location":"api/internal/#PRASInterface.update_availability!-Tuple{Random.AbstractRNG, Vector{Bool}, Vector{Int64}, Vector{PowerSystems.Generator}, Int64, Int64}","page":"Internal API Reference","title":"PRASInterface.update_availability!","text":"update_availability!(rng, availability, nexttransition, devices, t_now, t_last)\n\nReturn availability and next transition with new randomness\n\n\n\n\n\n","category":"method"},{"location":"#PowerSystems.jl","page":"Welcome Page","title":"PowerSystems.jl","text":"","category":"section"},{"location":"","page":"Welcome Page","title":"Welcome Page","text":"CurrentModule = PRASInterface","category":"page"},{"location":"#Overview","page":"Welcome Page","title":"Overview","text":"","category":"section"},{"location":"","page":"Welcome Page","title":"Welcome Page","text":"PRASInterface.jl is a Julia package that provides blah blah","category":"page"},{"location":"","page":"Welcome Page","title":"Welcome Page","text":"","category":"page"},{"location":"","page":"Welcome Page","title":"Welcome Page","text":"PRASInterface has been developed as part of the Transmission Planning Tools Maintenance project at the U.S. Department of Energy's National Renewable Energy Laboratory (NREL) funded by DOE Grid Deployment Office (GDO).","category":"page"},{"location":"api/public/#Public-API-Reference","page":"Public API Reference","title":"Public API Reference","text":"","category":"section"},{"location":"api/public/","page":"Public API Reference","title":"Public API Reference","text":"PRASInterface\ngenerate_pras_system\nPRAS\nSystemModel\nassess\nSequentialMonteCarlo\nShortfall\nLOLE\nEUE\nval\nstderror\ngenerate_outage_profile\ngenerate_csv_outage_profile\nadd_csv_time_series!\nadd_csv_time_series_single_stage!\nmake_generator_outage_draws!","category":"page"},{"location":"api/public/#PRASInterface","page":"Public API Reference","title":"PRASInterface","text":"PowerSystems Interface for Probabilistic Resource Adequacy Studies (PRAS)\n\nKey Functions\n\ngenerate_pras_system: convert PSY to PRAS model\nassess: assess PRAS model\n\nKey PRAS Types\n\nSystemModel: PRAS data structure\nSequentialMonteCarlo: method for PRAS analysis\nShortfall: PRAS metric for missing generation\nLOLE: PRAS metric for loss of load expectation\nEUE: PRAS metric for energy unserved expectation\n\n\n\n\n\n","category":"module"},{"location":"api/public/#PRASInterface.generate_pras_system","page":"Public API Reference","title":"PRASInterface.generate_pras_system","text":"generate_pras_system(sys::PSY.System, aggregation; kwargs...)\n\nSienna/Data PowerSystems.jl System is the input and an object of PRAS SystemModel is returned. ...\n\nArguments\n\nsys::PSY.System: Sienna/Data PowerSystems.jl System\naggregation<:PSY.AggregationTopology: \"PSY.Area\" (or) \"PSY.LoadZone\" {Optional}\navailability::Bool: Takes into account avaialability of StaticInjection components when building the PRAS System {Optional}\nlump_region_renewable_gens::Bool: Whether to lumps PV and Wind generators in a region because usually these generators don't have FOR data {Optional}\nexport_location::String: Export location of the .pras file ...\n\nReturns\n\n- `PRAS.SystemModel`: PRAS SystemModel object\n\nExamples\n\njulia> generate_pras_system(psy_sys)\nPRAS SystemModel\n\n\n\n\n\ngenerate_pras_system(sys_location::String, aggregation; kwargs...)\n\nGenerate a PRAS SystemModel from a Sienna/Data PowerSystems System JSON file.\n\nArguments\n\nsys_location::String: Location of the Sienna/Data PowerSystems System JSON file\naggregation::Type{AT}: Aggregation topology type\navailability::Bool: Availability of components in the System\nlump_region_renewable_gens::Bool: Lumping of region renewable generators\nexport_location::Union{Nothing, String}: Export location of the .pras file\n\nReturns\n\nPRAS.SystemModel: PRAS SystemModel\n\n\n\n\n\n","category":"function"},{"location":"api/public/#PRASInterface.PRAS","page":"Public API Reference","title":"PRASInterface.PRAS","text":"PRAS\n\nModule for Probabilistic Resource Adequacy Studies (PRAS).\n\nRe-exported in PRASInterface\n\nSource\n\nhttps://github.com/NREL/PRAS.jl\n\n\n\n\n\n","category":"module"},{"location":"api/public/#PRASInterface.PRAS.PRASBase.SystemModel","page":"Public API Reference","title":"PRASInterface.PRAS.PRASBase.SystemModel","text":"SystemModel\n\nSystemModel is the primary data structure for Probabilistic Resource Adequacy Studies (PRAS).\n\nYou can also load a SystemModel from an appropriately-formatted HDF5 file on disk.\n\nExamples\n\npras = SystemModel(\"path/to/pras.pras\")\n\n\n\n\n\n","category":"type"},{"location":"api/public/#PRASInterface.PRAS.ResourceAdequacy.assess","page":"Public API Reference","title":"PRASInterface.PRAS.ResourceAdequacy.assess","text":"assess(system::SystemModel, method::SequentialMonteCarlo, resultspecs::ResultSpec...)\n\nRun a Sequential Monte Carlo simulation on a system using the method data and return resultspecs.\n\nArguments\n\nsystem::SystemModel: PRAS data structure\nmethod::SequentialMonteCarlo: method for PRAS analysis\nresultspecs::ResultSpec...: PRAS metric for metrics like Shortfall missing generation\n\nReturns\n\nresults::Tuple{Vararg{ResultAccumulator{SequentialMonteCarlo}}}: PRAS metric results\n\n\n\n\n\n","category":"function"},{"location":"api/public/#PRASInterface.PRAS.ResourceAdequacy.SequentialMonteCarlo","page":"Public API Reference","title":"PRASInterface.PRAS.ResourceAdequacy.SequentialMonteCarlo","text":"SequentialMonteCarlo(;\n    samples::Int=10_000,\n    seed::Integer=rand(UInt64),\n    verbose::Bool=false,\n    threaded::Bool=true\n)\n\nSequential Monte Carlo simulation parameters for PRAS analysis\n\nIt it recommended that you fix the random seed for reproducibility.\n\nArguments\n\nsamples::Int=10_000: Number of samples\nseed::Integer=rand(UInt64): Random seed\nverbose::Bool=false: Print progress\nthreaded::Bool=true: Use multi-threading\n\nReturns\n\nSequentialMonteCarlo: PRAS analysis method\n\n\n\n\n\n","category":"type"},{"location":"api/public/#PRASInterface.PRAS.ResourceAdequacy.Shortfall","page":"Public API Reference","title":"PRASInterface.PRAS.ResourceAdequacy.Shortfall","text":"Shortfall\n\nShortfall metric represents lost load at regions and timesteps in ShortfallMatrix with a (regions, timestamps) matrix API.\n\n\n\n\n\n","category":"type"},{"location":"api/public/#PRASInterface.PRAS.ResourceAdequacy.LOLE","page":"Public API Reference","title":"PRASInterface.PRAS.ResourceAdequacy.LOLE","text":"LOLE\n\nLoss of load expectation metric. Contains a mean and standard error estimate.\n\n\n\n\n\n","category":"type"},{"location":"api/public/#PRASInterface.PRAS.ResourceAdequacy.EUE","page":"Public API Reference","title":"PRASInterface.PRAS.ResourceAdequacy.EUE","text":"EUE\n\nExpected unserved energy expectation metric. Contains a mean and standard error estimate.\n\n\n\n\n\n","category":"type"},{"location":"api/public/#PRASInterface.generate_outage_profile","page":"Public API Reference","title":"PRASInterface.generate_outage_profile","text":"generate_outage_profile(pras_system,num_runs,psy_sys,num_scenarios,location)\n\nProcess the assess results to get timeseries of generator status and include this timeseries data to the corresponding component in PSY System and exported using to_json method (serializing the PSY System).\n\n...\n\nArguments\n\npras_system::PRAS.SystemModel: PRAS System\nnum_runs::Int64: Number of PRAS runs\npsy_sys::PSY.System: PSY System\nnum_scenarios::Int64: Number of scenarios of user interest.\nlocation::String: Location to store outage profile. ...\n\nExamples\n\njulia> generate_outage_profile(results, pras_sys, psy_sys, 1)\nPSY System exported using to_json method in InfrastructureSystems\n\n\n\n\n\n","category":"function"},{"location":"api/public/#PRASInterface.generate_csv_outage_profile","page":"Public API Reference","title":"PRASInterface.generate_csv_outage_profile","text":"generate_outage_profile(pras_system,num_runs,psy_sys,num_scenarios,location)\n\nProcess the assess results to get timeseries of generator status and include this timeseries data to the corresponding component in PSY System and exported using to_json method (serializing the PSY System).\n\n...\n\nArguments\n\npras_system::PRAS.SystemModel: PRAS System\nnum_runs::Int64: Number of PRAS runs\npsy_sys::PSY.System: PSY System\nnum_scenarios::Int64: Number of scenarios of user interest.\nlocation::String: Location to store outage profile. ...\n\nExamples\n\njulia> generate_outage_profile(results, pras_sys, psy_sys, 1)\nPSY System exported using to_json method in InfrastructureSystems\n\n\n\n\n\n","category":"function"},{"location":"api/public/#PRASInterface.add_csv_time_series!","page":"Public API Reference","title":"PRASInterface.add_csv_time_series!","text":"add_csv_time_series!(\n    sys_DA,\n    sys_RT,\n    outage_csv_location::String;\n    days_of_interest::Union{Nothing, UnitRange}=nothing,\n    add_scenario::Union{Nothing, Int}=nothing,\n)\n\nGenerates outage profile for two stage PowerSimulation and adds availability time series data to Generators in PSY System from CSV files.\n\n\n\n\n\n","category":"function"},{"location":"api/public/#PRASInterface.add_csv_time_series_single_stage!","page":"Public API Reference","title":"PRASInterface.add_csv_time_series_single_stage!","text":"add_csv_time_series_single_stage!(\n    sys_DA,\n    outage_csv_location::String;\n    days_of_interest::Union{Nothing, UnitRange}=nothing,\n    add_scenario::Union{Nothing, Int}=nothing,\n)\n\nGenerates outage profile for single stage PowerSimulation and adds availability time series.\n\n\n\n\n\n","category":"function"},{"location":"api/public/#PRASInterface.make_generator_outage_draws!","page":"Public API Reference","title":"PRASInterface.make_generator_outage_draws!","text":"make_generator_outage_draws!(\n    sys,\n    initial_time::Dates.DateTime=nothing,\n    resolution::TIMEPERIOD=nothing,\n    steps::Int=nothing,\n    horizon::Int=nothing,\n) where {TIMEPERIOD <: Dates.TimePeriod}\n\nAdds availability time series to the generators in the system.\n\nMain function to make generator outage draws.\n\n\n\n\n\n","category":"function"}]
}
