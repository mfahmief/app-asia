import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  constructor(private http: HttpClient) {}

  async getLaunches(idNo: number): Promise<LaunchesData> {
    try {
      const response: LaunchesData = await this.http
        .get<LaunchesData>(`https://api.spacexdata.com/v3/launches/${idNo}`)
        .toPromise();

      return response;
    } catch (err) {
      throw err;
    }
  }
}

export interface LaunchesData {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: [
        {
          core_serial: string;
          flight: number;
          block: number;
          gridfins: boolean;
          legs: boolean;
          reused: boolean;
          land_success: null;
          landing_intent: boolean;
          landing_type: null;
          landing_vehicle: null;
        }
      ];
    };
    second_stage: {
      block: number;
      payloads: [
        {
          payload_id: string;
          norad_id: number[];
          cap_serial: string;
          reused: boolean;
          customers: string[];
          nationality: string;
          manufacturer: string;
          payload_type: string;
          payload_mass_kg: number;
          payload_mass_lbs: number;
          orbit: string;
          orbit_params: {
            reference_system: string;
            regime: string;
            longitude: null;
            semi_major_axis_km: number;
            eccentricity: number;
            periapsis_km: number;
            apoapsis_km: number;
            inclination_deg: number;
            period_min: number;
            lifespan_years: null;
            epoch: string;
            mean_motion: number;
            raan: number;
            arg_of_pericenter: number;
            mean_anomaly: number;
          };
          mass_returned_kg: number;
          mass_returned_lbs: number;
          flight_time_sec: number;
          cargo_manifest: string;
        }
      ];
    };
    fairings: null;
  };
  ships: string[];
  telemetry: {
    flight_club: string;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_recovery: null;
    reddit_media: string;
    presskit: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: string[];
  };
  details: string;
  upcoming: boolean;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: {
    webcast_liftoff: number;
    go_for_prop_loading: number;
    rp1_loading: number;
    stage1_lox_loading: number;
    stage2_lox_loading: number;
    engine_chill: number;
    prelaunch_checks: number;
    propellant_pressurization: number;
    go_for_launch: number;
    ignition: number;
    liftoff: number;
    maxq: number;
    meco: number;
    stage_sep: number;
    second_stage_ignition: number;
    'seco-1': number;
    dragon_separation: number;
    dragon_solar_deploy: number;
    dragon_bay_door_deploy: number;
  };
  crew: null;
}
