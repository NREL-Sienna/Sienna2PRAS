#######################################################
# Function to get available components in AggregationTopology
#######################################################
function get_available_components_in_aggregation_topology(type::Type{<:PSY.StaticInjection}, sys::PSY.System, region::PSY.AggregationTopology)
    avail_comps =  filter(x ->(PSY.get_available(x)),collect(PSY.get_components_in_aggregation_topology(type, sys, region)))
    return avail_comps
end

#######################################################
# get generator category
#######################################################
function get_generator_category(gen::GEN) where {GEN <: PSY.RenewableGen}
    return string(PSY.get_prime_mover_type(gen))
end

function get_generator_category(gen::GEN) where {GEN <: PSY.ThermalGen}
    return string(PSY.get_fuel(gen))
end

function get_generator_category(gen::GEN) where {GEN <: PSY.HydroGen}
    return "Hydro"
end

function get_generator_category(stor::GEN) where {GEN <: PSY.Storage}
    if (occursin("Distributed",PSY.get_name(stor)))
        return "Distributed_Storage"
    elseif (occursin("Battery",PSY.get_name(stor)))
        return "Battery_Storage"
    else
        return "Battery"
    end
end

function get_generator_category(stor::GEN) where {GEN <: PSY.HybridSystem}
    return "Hybrid-System"
end
#######################################################
# Line Rating
#######################################################
function line_rating(line::Union{PSY.Line,PSY.MonitoredLine})
    rate = PSY.get_rate(line);
    return(forward_capacity = abs(rate) , backward_capacity = abs(rate))
end

function line_rating(line::PSY.TwoTerminalHVDCLine)
    forward_capacity = getfield(PSY.get_active_power_limits_from(line), :max)
    backward_capacity = getfield(PSY.get_active_power_limits_to(line), :max)
    return(forward_capacity = abs(forward_capacity), backward_capacity = abs(backward_capacity))
end

function line_rating(line::DCLine) where {DCLine<:HVDCLineTypes}
    error("line_rating isn't defined for $(typeof(line))")
end

#######################################################
# Common function to handle getting time series values
#######################################################
function get_ts_values(ts::TS) where {TS <: PSY.AbstractDeterministic}
    if (typeof(ts) == PSY.DeterministicSingleTimeSeries)
        forecast_vals = get_ts_values(ts.single_time_series)
    else
        forecast_vals = []
        for it in collect(keys(PSY.get_data(ts)))
            append!(forecast_vals,collect(values(PSY.get_window(ts, it; len=interval_len))))
        end
    end
    return forecast_vals
end

function get_ts_values(ts::TS) where {TS <: PSY.StaticTimeSeries}
    forecast_vals = values(PSY.get_data(ts))
    return forecast_vals
end
#######################################################
# Functions to handle components with no time series
# usually the ones who's availability is set to false
#######################################################
function get_first_ts(ts::TS) where {TS <: Channel{Any}}
    if isempty(ts)
        return nothing
    else
        return first(ts)
    end
end
function get_forecast_values(ts::Nothing)
    return zeros(length(period_of_interest))
end

