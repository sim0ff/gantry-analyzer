const G_CONST = 9.80665; // Standard gravity m/s² per Sec 2.1

// BILINGUAL TRANSLATION DICTIONARY (EN / DE)
const I18N = {
  en: {
    app_title: "Heavy Hydraulic Gantry & Track Bearing Load Analyzer",
    app_badge_rev: "Rev 3.3 • 2006/42/EC",
    app_subtitle: "Single/Dual-Hook Statics &bull; Longitudinal 45&deg; Dispersion &bull; Zero Transverse Spread &bull; Strictly mm &bull; kg &bull; kN/m&sup2;",
    presets_label: "Scenario Presets:",
    preset_rotor: "180t Rotor (Dual)",
    preset_trafo: "85t Trafo (Single)",
    preset_press: "50t Press",
    btn_print: "Print / PDF Report",
    btn_reset: "Reset Defaults",
    tier2_mode_title: "Tier 2 Verification Mode",
    opt_a_title: "Option A (Default)",
    opt_a_desc: "2-Pt Cylinder Stage Rating Gate",
    opt_b_title: "Option B (Bypass)",
    opt_b_desc: "Equilibrium &amp; Floor Statics Only",
    mode_a_active: "Option A Active",
    mode_b_active: "Option B Active (Stage Check Bypassed)",
    sec1_title: "1. Lifting Beam &amp; Hook Configuration",
    sec1_ref: "Sec 2.1 &amp; 2.2",
    lbl_select_beam: "Select Header Lifting Beam (Inventory)",
    lbl_beam_profile: "Profile &amp; Cross-Section",
    lbl_beam_swl: "Manufacturer Rated SWL",
    lbl_clear_span: "Clear Gantry Span <span class=\"text-sky-400 font-mono\">(L)</span>",
    lbl_hook_cfg: "Rigging Hook Configuration <span class=\"text-slate-500 font-mono text-[10px]\">(Sec 2.2)</span>",
    cfg1_title: "Config 1: Single Hook",
    cfg1_desc: "Point load at offset x",
    cfg2_title: "Config 2: Dual Hook",
    cfg2_desc: "Equal 50/50 split (L_spread)",
    lbl_x_single: "Hook Offset from Support A <span class=\"text-amber-400 font-mono\">(x)</span>",
    lbl_x_dual: "Spreader Center from Support A <span class=\"text-amber-400 font-mono\">(x_center)</span>",
    lbl_support_a_0: "Support A (0 mm)",
    btn_center_load: "Center Load (L / 2)",
    lbl_support_b: "Support B",
    lbl_dual_spread: "Dual Hoist Spread <span class=\"font-mono\">(L_spread)</span>",
    lbl_hook1: "Hook 1",
    lbl_hook2: "Hook 2",
    lbl_payload: "Gross Suspended Payload <span class=\"text-amber-400 font-mono\">(P)</span>",
    lbl_dyn_factor: "Dynamic Factor (&phi;)",
    phi_100: "1.00 (Static 0%)",
    phi_105: "1.05 (EN 13001 Gentle)",
    phi_110: "1.10 (Standard Hoist)",
    phi_115: "1.15 (DIN 15018 Normal)",
    phi_120: "1.20 (Heavy Dynamic)",
    phi_125: "1.25 (Severe Pulse)",
    phi_static_warn: "EN 13001-2 Caution: φ < 1.05 permitted for static load test only.",
    lbl_alpha_h: "Side-Pull / Skew Factor (&alpha;_h)",
    alpha_000: "0.00 (Pure Vertical - Idealized)",
    alpha_005: "0.05 (5% Normal Travel / Skew - EN 13001)",
    alpha_010: "0.10 (10% Severe Side-Pull / Impact)",
    lbl_level_tol: "Sync Leveling Tolerance (mm/m)",
    lvl_10: "1.0 mm/m (Precision Sync)",
    lvl_20: "2.0 mm/m (Standard Hydraulic)",
    lvl_30: "3.0 mm/m (Field Maximum)",
    lbl_beam_mass: "Beam Mass (m_beam)",
    sec2_title: "2. Hydraulic Gantry Towers &amp; Deadweights",
    sec2_ref: "Sec 3.1 &amp; 4",
    lbl_select_gantry: "Select Gantry Unit Model (Inventory)",
    lbl_cyl_stage: "Cylinder Extension Stage",
    stage_0: "Retracted",
    stage_1: "Stage 1",
    stage_2: "Stage 2",
    stage_3: "Stage 3",
    stage_active_suffix: "Active",
    lbl_pin_height: "Pin Height:",
    lbl_2pt_rating: "2-Pt Rating:",
    no_2pt_rating: "NO PUBLISHED 2-PT RATING",
    missing_stage_alert: "&#9888; NO PUBLISHED 2-PT RATING for this configuration. Per ENG-WP-HGA-001 Sec 4 Tier 2, an arbitrary 50% split is not assumed.",
    lbl_shoe_length: "L_base (2nd / Side)",
    lbl_shoe_width: "Shoe Width (W_base)",
    lbl_tower_mass: "Tower Mass (W_tower)",
    lbl_shift_mass: "Side-Shift &amp; Swivel (per tower)",
    sec3_title: "3. Gantry Tracks &amp; 45&deg; Dispersion Physics",
    sec3_ref: "Sec 3.2",
    lbl_select_track: "Select Gantry Track Profile (Inventory)",
    lbl_track_depth: "Depth (h_track)",
    lbl_track_flange: "Flange (W_track)",
    lbl_track_mass: "Rail Mass (W_rail)",
    lbl_slab_depth: "Concrete Slab Thickness (h_slab)",
    lbl_support_interface: "Track Bearing Interface",
    support_direct_slab: "Track on slab",
    support_hardwood: "Hardwood block array",
    lbl_wood_height: "Hardwood Profile Height",
    lbl_wood_width: "Profile Width Along Rail",
    lbl_wood_length: "Block Length Across Track",
    lbl_wood_count: "Blocks per Rail",
    lbl_wood_gap: "Clear Gap",
    lbl_wood_mass: "Timber Mass per Support",
    lbl_wood_grade: "Hardwood Timber Grade & Density (EN 1995-1-1 / EN 338)",
    wood_grade_c24: "C24 Softwood (f_c,90,k = 2.5 MPa, ρ = 420 kg/m³)",
    wood_grade_d30: "D30 Hardwood (f_c,90,k = 8.0 MPa, ρ = 640 kg/m³)",
    wood_grade_d40: "D40 Oak / Azobe Std (f_c,90,k = 8.8 MPa, ρ = 700 kg/m³)",
    wood_grade_d70: "D70 Ekki / Azobe Heavy (f_c,90,k = 13.5 MPa, ρ = 900 kg/m³)",
    lbl_long_spread: "Longitudinal 45&deg; Spread (L_eff):",
    formula_prefix_slab: "L_eff = L_base + 2·h_track =",
    formula_prefix_hardwood: "Hardwood-to-slab 45° dispersion:",
    lbl_trans_width: "Contact Width (W_eff; zero transverse spread):",
    zero_lateral: "0° Lateral",
    lbl_eff_area: "Effective Bearing Area (A_eff):",
    lbl_allowable_q: "Allowable Slab Bearing Limit <span class=\"text-amber-400 font-mono\">(q_allowable)</span>",
    lbl_q_basis: "Slab Limit Verification Basis",
    q_basis_working: "Working / SLS Allowable (1.00 × F_base)",
    q_basis_uls: "Eurocode ULS Factored (1.35 G + 1.50 Q)",
    btn_slab_light: "Light Slab (30 kN/m&sup2;)",
    btn_slab_ind: "Industrial (150 kN/m&sup2;)",
    btn_slab_reinf: "Reinforced (250 kN/m&sup2;)",
    alert_matting_title: "Tier 3 Slab Bearing Violation &mdash; Load-Spreading Mats Required",
    alert_imbalance_title: "Eccentric Load Distribution Warning",
    alert_span_title: "Header Beam Stock Span Overrun",
    alert_stability_title: "Base Stability / Side-Pull Margin Alert",
    tier1_card_title: "Tier 1: Lifting Beam Safe Capacity Ceiling",
    btn_total_pdyn: "Total P_dyn",
    tile_peak_crown: "Peak Crown Force",
    tile_factored_hook: "Factored Hook (P_dyn)",
    tile_rated_swl: "Rated Beam SWL",
    tile_reserve: "Reserve Margin",
    max_end_suffix: "max end",
    buffer_suffix: "buffer",
    deficit_suffix: "deficit",
    tier1_formula_crown: "Check: max(F_crown,A, F_crown,B) &le; Capacity_beam_rated (Sec 4 Tier 1)",
    tier1_formula_payload: "Check: Total Factored Load P_dyn &le; Capacity_beam_rated (Gross SWL)",
    ltb_note: "EN 1993-1-1 § 6.3.2 ULS Bending &amp; LTB",
    tier1_ltb_title: "EN 1993-1-1 ULS Bending & LTB Check (L_cr = L)",
    lbl_m_ed: "M_Ed (1.35G+1.5Q):",
    lbl_mb_rd: "M_b,Rd (LTB Cap):",
    lbl_chi_lt: "Reduction Factor (χ_LT):",
    tier2_card_title: "Tier 2: Gantry Cylinder Extension Check (2-Point Rating)",
    tower_a_crown_lbl: "Tower A Crown Reaction (F_crown,A)",
    tower_b_crown_lbl: "Tower B Crown Reaction (F_crown,B)",
    lbl_applied: "Applied:",
    lbl_2pt_cap: "2-Pt Cap:",
    tier3_track_a_title: "Tier 3: Track A Bearing Pressure",
    tier3_track_b_title: "Tier 3: Track B Bearing Pressure",
    lbl_actual_stress_a: "Actual Contact Stress (q_A):",
    lbl_actual_stress_b: "Actual Contact Stress (q_B):",
    lbl_cum_base_a: "Cumulative Base Force (F_base,A):",
    lbl_cum_base_b: "Cumulative Base Force (F_base,B):",
    lbl_horiz_force: "Lateral Side-Pull Force (H_A / H_B):",
    lbl_stab_core: "Max Base Eccentricity (6e/B core):",
    lbl_sync_tol_span: "Max Sync Out-of-Level (ΔH_span):",
    lbl_allowable_prefix: "Allowable",
    lbl_limit_prefix: "Limit",
    svg_card_title: "Free-Body Structural Schematic (Frontal View) &bull; 0&deg; Transverse Spread",
    svg_drawing_header: "GANTRY PORTAL / FREE-BODY LOAD DIAGRAM (FRONTAL ELEVATION)",
    svg_drawing_subtitle_slab: "FRONTAL: 0° TRANSVERSE SPREAD  |  LONGITUDINAL: 45° THROUGH h_track",
    svg_drawing_subtitle_hardwood: "FRONTAL: 0° TRANSVERSE SPREAD  |  LONGITUDINAL: 45° TIMBER–SLAB (h_slab)",
    unit_svg_card_title: "Hydraulic Gantry Tower Schematic (Frontal View)",
    track_svg_card_title: "Gantry Track Schematic (Frontal 0&deg; &amp; Longitudinal 45&deg;)",
    svg_track_front_view: "FRONTAL VIEW (0° LATERAL)",
    svg_track_side_view: "LONGITUDINAL SIDE VIEW (45°)",
    svg_track_callout_title: "TRACK / SLAB / SUPPORT",
    svg_floor_callout_title: "FLOOR BEARING (A_eff & q_allowable)",
    svg_hardwood_length: "Hardwood length",
    svg_hardwood_profile: "Hardwood profile",
    svg_tag_shift: "SIDE-SHIFT & SWIVEL (W_shift)",
    svg_tag_stage: "CYLINDER STAGE (H_stage)",
    svg_tag_tower: "TOWER MASS (W_tower)",
    svg_tag_w_base: "SHOE WIDTH — FRONTAL (W_base)",
    svg_tag_l_base: "2ND (INTO PAGE): L_base",
    svg_side_view_note: "(Side View)",
    svg_per_tower: "/ tower",
    svg_w_base_frontal: "W_base (Frontal)",
    svg_slab_note: "slab",
    svg_track_note: "track",
    svg_cfg1_badge: "Config 1: Single Hook Point Load",
    svg_cfg2_badge: "Config 2: Dual Hook (50/50 Split)",
    svg_tower_a: "TOWER A",
    svg_tower_b: "TOWER B",
    svg_clear_span: "CLEAR SPAN L",
    svg_total_suffix: "Total",
    chart_card_title: "Internal Beam Forces (Sec 2.3 &bull; 60 Intervals)",
    btn_tab_bmd: "Bending Moment M(x)",
    btn_tab_sfd: "Shear Force V(x)",
    chart_lbl_bmd: "Bending Moment M(x) [kNm]",
    chart_lbl_sfd: "Shear Force V(x) [kN]",
    table_card_title: "Progressive Load Accumulation &amp; Equilibrium Breakdown",
    th_level: "Structural Level / Parameter",
    th_tower_a: "Tower A (Left)",
    th_tower_b: "Tower B (Right)",
    th_total: "Total System",
    th_rule: "Reference / Rule",
    tr_dyn_hook: "Dynamic Hook Load",
    tr_beam_dw: "Header Lifting Beam Deadweight (W_beam)",
    tr_beam_rule: "UDL Split (W_beam / 2)",
    tr_crown_react: "Total Crown Reaction Force (F_crown)",
    tr_crown_rule: "Tier 1 &amp; Tier 2 Input",
    tr_crown_dw: "Side-Shift &amp; Swivel Mass (W_shift)",
    tr_crown_dw_rule: "Top Swivel & Side-Shift",
    tr_tower_dw: "Gantry Telescopic Leg &amp; Base (W_tracks_tower)",
    tr_tower_dw_rule: "Tower Self-Weight",
    tr_track_dw: "Gantry Track Section Weight (W_track_unit)",
    tr_track_dw_wood: "Track + Hardwood Support Weight",
    tr_track_dw_rule: "Track Self-Weight",
    tr_track_dw_wood_rule: "Track and timber per support",
    support_direct_summary: "Track bears directly on slab; 45° longitudinal spread occurs through track height (h_track).",
    tr_base_force: "Cumulative Vertical Base Force (F_base)",
    tr_base_rule: "Sec 3.1 Foundation Load",
    tr_eff_area: "Effective Bearing Contact Area (A_eff)",
    tr_actual_press: "Actual Ground Contact Stress (q_actual)",
    tr_edge_peak: "Eccentric Edge Peak Bearing Pressure (q_peak)",
    tr_timber_check: "Hardwood Crushing Stress (EN 1995-1-1 σ_c,90)",
    tr_ltb_check: "Header Beam ULS Bending & LTB (EN 1993-1-1)",
    tr_overall_gate: "Multi-Tier Overall Verification Gate",
    rule_single_hook: "Single Hook",
    rule_dual_hook: "Dual 50/50",
    status_overload: "OVERLOAD",
    status_caution: "CAUTION",
    status_pass: "PASS",
    status_utilized: "Utilized",
    status_stage_overload: "STAGE OVERLOAD",
    status_stage_caution: "STAGE CAUTION",
    status_bypassed: "BYPASSED (OPTION B)",
    status_fail_overload: "FAIL / OVERLOAD",
    status_caution_85: "CAUTION (>85%)",
    status_pass_verified: "PASS VERIFIED",
    status_unverified_2pt: "UNVERIFIED (NO 2-PT RATING)",
    status_invalid_hardwood: "INVALID HARDWOOD GEOMETRY",
    shoe_word: "Shoe",
    sec6_title: "Engineering Limitations &amp; Boundary Conditions (ENG-WP-HGA-001 Sec 6)",
    sec6_lim1: "<strong class=\"text-slate-200\">1. Quasi-Static 2D Model:</strong> Models 2D planar equilibrium. Does not compute 3D lateral crabbing, track misalignments, side-pull, or wind forces.",
    sec6_lim2: "<strong class=\"text-slate-200\">2. Track Span Continuity:</strong> Assumes tracks are continuously supported by a flat slab. Spanning floor pits, trenches, or joints requires unsupported bridge analysis.",
    sec6_lim3: "<strong class=\"text-slate-200\">3. Rigid Base &amp; Zero Lateral Spread:</strong> Contact stress is evaluated as uniform average pressure (q = F / A_eff) with 45&deg; longitudinal and 0&deg; transverse dispersion.",
    sec6_lim4: "<strong class=\"text-slate-200\">4. Sign-Off Requirement:</strong> Preliminary lift planning aid only; does not supersede stamped lift studies by a licensed Professional Engineer (PE / Pr&uuml;fingenieur).",
    lbl_q_peak_a: "Edge Peak Pressure A (q_peak,A):",
    lbl_q_peak_b: "Edge Peak Pressure B (q_peak,B):",
    timber_card_title: "Tier 3B: Timber Rail-to-Hardwood Crushing (EN 1995-1-1 § 6.1.5)",
    lbl_sigma_c90: "Max Bearing Stress (σ_c,90,Ed):",
    lbl_fc90d: "Design Crushing Limit (f_c,90,d):",
    lbl_rail_timber_area: "Rail-to-Timber Contact Area:",
    md_checklist_title: "Machinery Directive 2006/42/EC Pre-Lift Commissioning Checklist",
    md_chk_sync: "Hydraulic stroke & synchronized leveling verified within ΔH_span & ΔH_base limits prior to lift-off.",
    md_chk_rails: "Runway rails joined, pinned, laterally anchored, and hardwood cribbing inspected for grain/gap conformity.",
    md_chk_ltb: "Header beam saddle connections centered, twist-locked against LTB, and span within stock rating.",
    md_chk_pe: "Site geotechnical slab verification & stamped lift plan signed off per 2006/42/EC Annex I § 4.1.2.6."
  },
  de: {
    app_title: "Hydraulik-Portalkran & Schienen-Bodenpressungs-Analysator",
    app_badge_rev: "Rev 3.3 • 2006/42/EG",
    app_subtitle: "Einzel-/Doppelhaken-Statik &bull; 45&deg;-Längsausbreitung &bull; 0&deg; Querausbreitung &bull; Strikt mm &bull; kg &bull; kN/m&sup2;",
    presets_label: "Szenario-Vorlagen:",
    preset_rotor: "180t Rotor (Doppel)",
    preset_trafo: "85t Trafo (Einzel)",
    preset_press: "50t Presse",
    btn_print: "Drucken / PDF-Bericht",
    btn_reset: "Standardwerte",
    tier2_mode_title: "Stufe-2 Nachweismodus",
    opt_a_title: "Option A (Standard)",
    opt_a_desc: "2-Punkt Zylinder-Hubstufen-Prüfung",
    opt_b_title: "Option B (Bypass)",
    opt_b_desc: "Nur Gleichgewicht &amp; Bodenpressung",
    mode_a_active: "Option A Aktiv",
    mode_b_active: "Option B Aktiv (Ohne Hubstufen-Prüfung)",
    sec1_title: "1. Hubbalken (Kopfträger) &amp; Hakenkonfiguration",
    sec1_ref: "Abschn. 2.1 &amp; 2.2",
    lbl_select_beam: "Kopfträger / Hubbalken wählen (Inventar)",
    lbl_beam_profile: "Profil &amp; Querschnitt",
    lbl_beam_swl: "Zulässige Tragfähigkeit (SWL)",
    lbl_clear_span: "Lichte Stützweite <span class=\"text-sky-400 font-mono\">(L)</span>",
    lbl_hook_cfg: "Anschlag- &amp; Hakenkonfiguration <span class=\"text-slate-500 font-mono text-[10px]\">(Abschn. 2.2)</span>",
    cfg1_title: "Konfig 1: Einzelhaken",
    cfg1_desc: "Einzellast bei Ausladung x",
    cfg2_title: "Konfig 2: Doppelhaken",
    cfg2_desc: "50/50-Lastteilung (L_spread)",
    lbl_x_single: "Hakenabstand von Auflager A <span class=\"text-amber-400 font-mono\">(x)</span>",
    lbl_x_dual: "Traversenmitte von Auflager A <span class=\"text-amber-400 font-mono\">(x_center)</span>",
    lbl_support_a_0: "Auflager A (0 mm)",
    btn_center_load: "Last zentrieren (L / 2)",
    lbl_support_b: "Auflager B",
    lbl_dual_spread: "Hakenabstand / Spreizung <span class=\"font-mono\">(L_spread)</span>",
    lbl_hook1: "Haken 1",
    lbl_hook2: "Haken 2",
    lbl_payload: "Brutto-Hakenlast / Nutzlast <span class=\"text-amber-400 font-mono\">(P)</span>",
    lbl_dyn_factor: "Dynamikfaktor (&phi;)",
    phi_100: "1.00 (Statisch 0%)",
    phi_105: "1.05 (EN 13001 Sanft)",
    phi_110: "1.10 (Standard-Hub)",
    phi_115: "1.15 (DIN 15018 Normal)",
    phi_120: "1.20 (Hohe Dynamik)",
    phi_125: "1.25 (Starkes Pulsieren)",
    phi_static_warn: "EN 13001-2 Hinweis: φ < 1,05 nur für statische Belastungsprüfung zulässig.",
    lbl_alpha_h: "Schrägzug- / Querfaktor (&alpha;_h)",
    alpha_000: "0,00 (Rein vertikal - idealisiert)",
    alpha_005: "0,05 (5% Normalfahrt / Schräglauf - EN 13001)",
    alpha_010: "0,10 (10% Starker Schrägzug / Stoß)",
    lbl_level_tol: "Sync-Nivelliertoleranz (mm/m)",
    lvl_10: "1,0 mm/m (Präzisions-Sync)",
    lvl_20: "2,0 mm/m (Standard-Hydraulik)",
    lvl_30: "3,0 mm/m (Baustellen-Maximum)",
    lbl_beam_mass: "Trägermasse (m_beam)",
    sec2_title: "2. Hydraulik-Portaltürme &amp; Eigengewichte",
    sec2_ref: "Abschn. 3.1 &amp; 4",
    lbl_select_gantry: "Portalkran-Einheit wählen (Inventar)",
    lbl_cyl_stage: "Zylinder-Ausfahrstufe",
    stage_0: "Eingefahren",
    stage_1: "Stufe 1",
    stage_2: "Stufe 2",
    stage_3: "Stufe 3",
    stage_active_suffix: "Aktiv",
    lbl_pin_height: "Bolzenhöhe:",
    lbl_2pt_rating: "2-Pkt.-Last:",
    no_2pt_rating: "KEINE 2-PKT.-FREIGABE",
    missing_stage_alert: "&#9888; KEINE VERÖFFENTLICHTE 2-PKT.-TRAGLAST für diese Konfiguration. Gemäß ENG-WP-HGA-001 Abschn. 4 wird keine pauschale 50%-Regel angesetzt.",
    lbl_shoe_length: "L_base (Sek. / Längs)",
    lbl_shoe_width: "Fußbreite (W_base)",
    lbl_tower_mass: "Turmmasse (W_tower)",
    lbl_shift_mass: "Seitenverschub &amp; Drehkranz",
    sec3_title: "3. Fahrschienen &amp; 45&deg;-Lastausbreitung",
    sec3_ref: "Abschn. 3.2",
    lbl_select_track: "Fahrschienen-Profil wählen (Inventar)",
    lbl_track_depth: "Höhe (h_track)",
    lbl_track_flange: "Breite (W_track)",
    lbl_track_mass: "Schienenmasse (W_rail)",
    lbl_slab_depth: "Betondeckendicke (h_slab)",
    lbl_support_interface: "Schienenauflager",
    support_direct_slab: "Schiene auf Beton",
    support_hardwood: "Hartholzklotz-Anordnung",
    lbl_wood_height: "Hartholzprofilhöhe",
    lbl_wood_width: "Profilbreite entlang der Schiene",
    lbl_wood_length: "Klotzlänge quer zur Schiene",
    lbl_wood_count: "Klötze je Schiene",
    lbl_wood_gap: "Lichter Abstand",
    lbl_wood_mass: "Holzmasse je Auflager",
    lbl_wood_grade: "Holzfestigkeit & Rohdichte (EN 1995-1-1 / EN 338)",
    wood_grade_c24: "C24 Nadelholz (f_c,90,k = 2,5 MPa, ρ = 420 kg/m³)",
    wood_grade_d30: "D30 Laubholz (f_c,90,k = 8,0 MPa, ρ = 640 kg/m³)",
    wood_grade_d40: "D40 Eiche / Azobe Std (f_c,90,k = 8,8 MPa, ρ = 700 kg/m³)",
    wood_grade_d70: "D70 Bongossi Schwer (f_c,90,k = 13,5 MPa, ρ = 900 kg/m³)",
    lbl_long_spread: "45&deg;-Längsausbreitung (L_eff):",
    formula_prefix_slab: "L_eff = L_base + 2·h_track =",
    formula_prefix_hardwood: "45°-Ausbreitung Holz–Decke:",
    lbl_trans_width: "Kontaktbreite (W_eff; keine Querausbreitung):",
    zero_lateral: "0° Quer",
    lbl_eff_area: "Wirksame Aufstandsfläche (A_eff):",
    lbl_allowable_q: "Zulässige Bodenpressung <span class=\"text-amber-400 font-mono\">(q_allowable)</span>",
    lbl_q_basis: "Nachweisbasis Deckenpressung",
    q_basis_working: "Gebrauchslast / Zulässig (1,00 × F_base)",
    q_basis_uls: "Eurocode GZT / ULS (1,35 G + 1,50 Q)",
    btn_slab_light: "Leichtdecke (30 kN/m&sup2;)",
    btn_slab_ind: "Industrieboden (150 kN/m&sup2;)",
    btn_slab_reinf: "Schwerlastplatte (250 kN/m&sup2;)",
    alert_matting_title: "Stufe-3 Grenzwertüberschreitung &mdash; Lastverteilplatten / Baggermatten erforderlich",
    alert_imbalance_title: "Warnung: Starke Lastexzentrizität (Asymmetrie)",
    alert_span_title: "Überschreitung Lieferlänge Hubbalken",
    alert_stability_title: "Kipp- & Schrägzug-Stabilitätswarnung",
    tier1_card_title: "Stufe 1: Tragfähigkeitsnachweis Hubbalken (Obergrenze)",
    btn_total_pdyn: "Gesamt P_dyn",
    tile_peak_crown: "Max. Auflagerkraft",
    tile_factored_hook: "Dyn. Hakenlast (P_dyn)",
    tile_rated_swl: "Nenn-Tragfähigkeit",
    tile_reserve: "Sicherheitsreserve",
    max_end_suffix: "Max. Auflager",
    buffer_suffix: "Reserve",
    deficit_suffix: "Überschreitung",
    tier1_formula_crown: "Nachweis: max(F_crown,A, F_crown,B) &le; Capacity_beam_rated (Abschn. 4 Stufe 1)",
    tier1_formula_payload: "Nachweis: Dynamische Gesamtlast P_dyn &le; Capacity_beam_rated (Brutto-SWL)",
    ltb_note: "EN 1993-1-1 § 6.3.2 GZT Biegung &amp; Biegedrillknicken (BDK)",
    tier1_ltb_title: "EN 1993-1-1 GZT Biegung & BDK-Nachweis (L_cr = L)",
    lbl_m_ed: "M_Ed (1,35G+1,5Q):",
    lbl_mb_rd: "M_b,Rd (BDK-Grenze):",
    lbl_chi_lt: "Abminderung (χ_LT):",
    tier2_card_title: "Stufe 2: Nachweis Zylinder-Hubstufe (2-Punkt-Traglast)",
    tower_a_crown_lbl: "Turm A Kopfauflagerkraft (F_crown,A)",
    tower_b_crown_lbl: "Turm B Kopfauflagerkraft (F_crown,B)",
    lbl_applied: "Einwirkung:",
    lbl_2pt_cap: "2-Pkt.-Grenzlast:",
    tier3_track_a_title: "Stufe 3: Schiene A Bodenpressung",
    tier3_track_b_title: "Stufe 3: Schiene B Bodenpressung",
    lbl_actual_stress_a: "Vorhandene Pressung (q_A):",
    lbl_actual_stress_b: "Vorhandene Pressung (q_B):",
    lbl_cum_base_a: "Vertikale Sohlkraft (F_base,A):",
    lbl_cum_base_b: "Vertikale Sohlkraft (F_base,B):",
    lbl_horiz_force: "Horizontalkraft Schrägzug (H_A / H_B):",
    lbl_stab_core: "Max. Sohl-Exzentrizität (6e/B Kern):",
    lbl_sync_tol_span: "Max. Sync-Höhendifferenz (ΔH_span):",
    lbl_allowable_prefix: "Zulässig",
    lbl_limit_prefix: "Grenzwert",
    svg_card_title: "Freikörperbild &amp; Systemstatik (Frontalansicht) &bull; 0&deg; Querausbreitung",
    svg_drawing_header: "PORTALRAHMEN / FREIKÖRPER-LASTBILD (FRONTALANSICHT)",
    svg_drawing_subtitle_slab: "FRONTAL: 0° QUER  |  LÄNGS: 45° DURCH h_track",
    svg_drawing_subtitle_hardwood: "FRONTAL: 0° QUER  |  LÄNGS: 45° HOLZ–DECKE (h_slab)",
    unit_svg_card_title: "Hydraulik-Portalturm Schema (Frontalansicht)",
    track_svg_card_title: "Fahrschienen-Schema (Frontal 0&deg; &amp; Längs 45&deg;)",
    svg_track_front_view: "FRONTALANSICHT (0° QUER)",
    svg_track_side_view: "LÄNGSSCHNITT (45°)",
    svg_track_callout_title: "SCHIENE / DECKE / AUFLAGER",
    svg_floor_callout_title: "BODENPRESSUNG (A_eff & q_allowable)",
    svg_hardwood_length: "Hartholz-Länge",
    svg_hardwood_profile: "Hartholz-Profil",
    svg_tag_shift: "SEITENVERSCHUB & DREHKRANZ (W_shift)",
    svg_tag_stage: "ZYLINDER-HUBSTUFE (H_stage)",
    svg_tag_tower: "TURMMASSE (W_tower)",
    svg_tag_w_base: "FUSSBREITE — FRONTAL (W_base)",
    svg_tag_l_base: "SEKUNDÄR (TIEFE): L_base",
    svg_side_view_note: "(Seitenansicht)",
    svg_per_tower: "/ Turm",
    svg_w_base_frontal: "W_base (Frontal)",
    svg_slab_note: "Decke",
    svg_track_note: "Schiene",
    svg_cfg1_badge: "Konfig 1: Einzelhaken-Punktlast",
    svg_cfg2_badge: "Konfig 2: Doppelhaken (50/50-Split)",
    svg_tower_a: "TURM A",
    svg_tower_b: "TURM B",
    svg_clear_span: "LICHTE WEITE L",
    svg_total_suffix: "Gesamt",
    chart_card_title: "Schnittgrößen im Hubbalken (Abschn. 2.3 &bull; 60 Intervalle)",
    btn_tab_bmd: "Biegemoment M(x)",
    btn_tab_sfd: "Querkraft V(x)",
    chart_lbl_bmd: "Biegemoment M(x) [kNm]",
    chart_lbl_sfd: "Querkraft V(x) [kN]",
    table_card_title: "Lastaufstellung &amp; Statisches Gleichgewicht",
    th_level: "Strukturebene / Parameter",
    th_tower_a: "Turm A (Links)",
    th_tower_b: "Turm B (Rechts)",
    th_total: "Gesamtsystem",
    th_rule: "Referenz / Verteilungsregel",
    tr_dyn_hook: "Dynamische Hakenlast",
    tr_beam_dw: "Eigengewicht Hubbalken (W_beam)",
    tr_beam_rule: "Gleichlast (W_beam / 2)",
    tr_crown_react: "Gesamte Kopfauflagerkraft (F_crown)",
    tr_crown_rule: "Eingangsgröße Stufe 1 &amp; 2",
    tr_crown_dw: "Seitenverschub &amp; Drehkranz (W_shift)",
    tr_crown_dw_rule: "Verschub & Drehkranz",
    tr_tower_dw: "Portalturm &amp; Teleskopzylinder (W_tracks_tower)",
    tr_tower_dw_rule: "Turm-Eigengewicht",
    tr_track_dw: "Fahrschienensegment (W_track_unit)",
    tr_track_dw_wood: "Schiene + Hartholzauflager",
    tr_track_dw_rule: "Schienen-Eigengewicht",
    tr_track_dw_wood_rule: "Schiene und Holz je Auflager",
    support_direct_summary: "Schiene liegt direkt auf der Betondecke; 45°-Längsausbreitung erfolgt über die Schienenhöhe (h_track).",
    tr_base_force: "Kumulierte Vertikale Sohlkraft (F_base)",
    tr_base_rule: "Abschn. 3.1 Fundamentlast",
    tr_eff_area: "Wirksame Kontaktfläche (A_eff)",
    tr_actual_press: "Vorhandene Bodenpressung (q_actual)",
    tr_edge_peak: "Kantenpressung aus Schrägzug (q_peak)",
    tr_timber_check: "Hartholz-Querdruckspannung (EN 1995-1-1 σ_c,90)",
    tr_ltb_check: "Hubbalken GZT Biegung & BDK (EN 1993-1-1)",
    tr_overall_gate: "Mehrstufige Gesamtbewertung",
    rule_single_hook: "Einzelhaken",
    rule_dual_hook: "Doppel 50/50",
    status_overload: "ÜBERLAST",
    status_caution: "WARNUNG",
    status_pass: "OK",
    status_utilized: "Auslastung",
    status_stage_overload: "STUFEN-ÜBERLAST",
    status_stage_caution: "STUFEN-WARNUNG",
    status_bypassed: "ÜBERSPRUNGEN (OPTION B)",
    status_fail_overload: "FEHLER / ÜBERLAST",
    status_caution_85: "WARNUNG (>85%)",
    status_pass_verified: "NACHWEIS ERFÜLLT",
    status_unverified_2pt: "UNGEPRÜFT (KEINE 2-PKT.-FREIGABE)",
    status_invalid_hardwood: "UNGÜLTIGE HARTHOLZ-GEOMETRIE",
    shoe_word: "Fuß",
    sec6_title: "Systemgrenzen &amp; Randbedingungen (ENG-WP-HGA-001 Abschn. 6)",
    sec6_lim1: "<strong class=\"text-slate-200\">1. Quasi-statisches 2D-Modell:</strong> Berechnet das ebene Gleichgewicht. Schrägzug, Spurversatz oder Windlasten in 3D sind gesondert zu betrachten.",
    sec6_lim2: "<strong class=\"text-slate-200\">2. Durchgehende Schienenauflagerung:</strong> Setzt eine vollflächige, ebene Deckenauflagerung voraus. Kanäle, Gruben oder Fugen erfordern eine freie Trägerberechnung.",
    sec6_lim3: "<strong class=\"text-slate-200\">3. Starre Sohle &amp; 0&deg; Querausbreitung:</strong> Bodenpressung als mittlere Normalspannung (q = F / A_eff) mit 45&deg;-Längs- und 0&deg;-Querausbreitung.",
    sec6_lim4: "<strong class=\"text-slate-200\">4. Freigabevorbehalt:</strong> Dient der Vorplanung und ersetzt keine geprüfte, gestempelte Hubstudie durch einen zugelassenen Prüfingenieur (PE).",
    lbl_q_peak_a: "Kantenpressung A (q_peak,A):",
    lbl_q_peak_b: "Kantenpressung B (q_peak,B):",
    timber_card_title: "Stufe 3B: Querdruck Schiene auf Hartholz (EN 1995-1-1 § 6.1.5)",
    lbl_sigma_c90: "Max. Querdruck (σ_c,90,Ed):",
    lbl_fc90d: "Bemessungswert (f_c,90,d):",
    lbl_rail_timber_area: "Kontaktfläche Schiene–Holz:",
    md_checklist_title: "Maschinenrichtlinie 2006/42/EG Abnahme- & Prüfprotokoll vor Hubbeginn",
    md_chk_sync: "Zylinderhub & Gleichlaufsteuerung vor Lastaufnahme innerhalb ΔH_span & ΔH_base geprüft.",
    md_chk_rails: "Fahrschienen gestoßen, verbolzt, seitlich gesichert und Hartholzunterlagen auf Vollständigkeit geprüft.",
    md_chk_ltb: "Kopfträger-Auflager zentriert, kippsicher gegen Biegedrillknicken verriegelt und Spannweite im Liefermaß.",
    md_chk_pe: "Bodengutachten / Deckentragfähigkeit sowie gestempelte Hubplanung gemäß 2006/42/EG Anh. I § 4.1.2.6 freigegeben."
  }
};

// State Variables
let currentLang = 'en';      // 'en' or 'de'
let currentMode = 'A';       // 'A' (Tier 2 cylinder stage check) or 'B' (bypass stage check)
let currentHookConfig = 'single'; // 'single' (Config 1) or 'dual' (Config 2: 50/50 split)
let currentStage = 1;        // 0 (Retracted), 1, 2, 3
let currentDiagramTab = 'bmd';
let tier1Basis = 'crown';    // 'crown' (Spec Sec 4: max(F_crown,A, F_crown,B)) or 'payload' (Total P_dyn)
let chartInstance = null;

// Translation Helper
function t(key) {
  const dict = I18N[currentLang] || I18N.en;
  return dict[key] !== undefined ? dict[key] : (I18N.en[key] || key);
}

function getStageLabel(stageNum) {
  return t(`stage_${stageNum}`);
}

// Language Switcher Function
function setLanguage(lang) {
  currentLang = (lang === 'de') ? 'de' : 'en';
  document.documentElement.lang = currentLang;

  const btnEN = document.getElementById('btnLangEN');
  const btnDE = document.getElementById('btnLangDE');
  if (currentLang === 'en') {
    btnEN.className = 'px-2.5 py-1 rounded-md bg-sky-600 text-white font-bold transition text-[11px]';
    btnDE.className = 'px-2.5 py-1 rounded-md text-slate-400 hover:text-white font-bold transition text-[11px]';
  } else {
    btnDE.className = 'px-2.5 py-1 rounded-md bg-sky-600 text-white font-bold transition text-[11px]';
    btnEN.className = 'px-2.5 py-1 rounded-md text-slate-400 hover:text-white font-bold transition text-[11px]';
  }

  // Apply plain-text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Apply HTML-enabled translations
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // Refresh dynamic dropdowns & active states while preserving selections
  const curBeam = document.getElementById('select_beam').value;
  const curGantry = document.getElementById('select_gantry').value;
  const curTrack = document.getElementById('select_track').value;
  initDropdowns(curBeam, curGantry, curTrack);

  setMode(currentMode);
  setStage(currentStage);
  setHookConfig(currentHookConfig);
  setTier1Basis(tier1Basis);
  runAnalysis();
}

// Formatting Helpers
function fmt(val, dec = 1) {
  if (val === null || isNaN(val)) return '—';
  return Number(Math.round(val + 'e' + dec) + 'e-' + dec).toFixed(dec);
}
function fmtInt(val) {
  if (val === null || isNaN(val)) return '—';
  return Math.round(val).toLocaleString(currentLang === 'de' ? 'de-DE' : 'en-US');
}

// Heaviside Step Function H(x - x_i) per Section 2.3
function heaviside(x, xi) {
  return x >= xi - 1e-9 ? 1.0 : 0.0;
}

// Populate UI Dropdowns on Startup or Language Switch
function initDropdowns(selectedBeamId = null, selectedGantryId = null, selectedTrackId = null) {
  const beamSelect = document.getElementById('select_beam');
  beamSelect.innerHTML = '';
  INVENTORY_BEAMS.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = `${b.id} | ${b.profile} (L=${b.L}mm, SW=${b.weight}kg, SWL=${b.cap/1000}t)`;
    if (selectedBeamId ? b.id === selectedBeamId : b.default) opt.selected = true;
    beamSelect.appendChild(opt);
  });

  const gantrySelect = document.getElementById('select_gantry');
  gantrySelect.innerHTML = '';
  INVENTORY_GANTRIES.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.id;
    opt.textContent = `${g.id} | ${g.model} (${g.unitWt}kg, ${t('shoe_word')} ${g.baseL}×${g.baseW}mm)`;
    if (selectedGantryId ? g.id === selectedGantryId : g.default) opt.selected = true;
    gantrySelect.appendChild(opt);
  });

  const trackSelect = document.getElementById('select_track');
  trackSelect.innerHTML = '';
  INVENTORY_TRACKS.forEach(tr => {
    const opt = document.createElement('option');
    opt.value = tr.id;
    opt.textContent = `${tr.name} (h=${tr.H}mm, W=${tr.W_default}mm, ${tr.weight}kg)`;
    if (selectedTrackId ? tr.id === selectedTrackId : tr.default) opt.selected = true;
    trackSelect.appendChild(opt);
  });
}

// Dropdown Change Handlers
function onSelectBeam() {
  const beamId = document.getElementById('select_beam').value;
  const beam = INVENTORY_BEAMS.find(b => b.id === beamId);
  if (!beam) return;

  const cap_kN = (beam.cap * G_CONST) / 1000.0;
  document.getElementById('disp_beam_profile').textContent = `${beam.profile} (${beam.id})`;
  document.getElementById('disp_beam_dims').textContent = `${beam.W} × ${beam.H} mm`;
  document.getElementById('disp_beam_cap_kg').textContent = `${fmtInt(beam.cap)} kg`;
  document.getElementById('disp_beam_cap_kN').textContent = `(${fmt(cap_kN, 1)} kN / ${fmt(beam.cap / 1000.0, 1)} t)`;

  document.getElementById('input_W_beam_kg').value = beam.weight;
  syncParam('L', beam.L);
}

function onSelectGantry() {
  const gantryId = document.getElementById('select_gantry').value;
  const gantry = INVENTORY_GANTRIES.find(g => g.id === gantryId);
  if (!gantry) return;

  document.getElementById('input_base_length_mm').value = gantry.baseL;
  document.getElementById('input_base_width_mm').value = gantry.baseW;
  document.getElementById('input_W_lift_unit_kg').value = gantry.unitWt;

  updateStageDisplay();
  runAnalysis();
}

function onSelectTrack() {
  const trackId = document.getElementById('select_track').value;
  const track = INVENTORY_TRACKS.find(tr => tr.id === trackId);
  if (!track) return;

  document.getElementById('input_h_track_mm').value = track.H;
  document.getElementById('input_w_track_mm').value = track.W_default;
  document.getElementById('input_W_track_unit_kg').value = track.weight;

  runAnalysis();
}

function setTrackSupportMode(mode) {
  const normalized = mode === 'hardwood' ? 'hardwood' : 'slab';
  document.getElementById('input_track_support_mode').value = normalized;
  document.getElementById('hardwoodControls').classList.toggle('hidden', normalized !== 'hardwood');

  const hSlabWrap = document.getElementById('hSlabFieldWrap');
  const hSlabInput = document.getElementById('input_h_slab_mm');
  if (hSlabInput) hSlabInput.disabled = normalized !== 'hardwood';
  if (hSlabWrap) {
    hSlabWrap.classList.toggle('opacity-45', normalized !== 'hardwood');
    hSlabWrap.classList.toggle('pointer-events-none', normalized !== 'hardwood');
  }
  runAnalysis();
}

function getTrackBearingFootprint(L_base_mm, W_track_mm, h_track_mm, h_slab_mm) {
  const supportMode = document.getElementById('input_track_support_mode').value;
  const blockCountInput = document.getElementById('input_wood_count');
  const blockLengthInput = document.getElementById('input_l_wood_mm');
  const blockGapInput = document.getElementById('input_wood_gap_mm');
  const blockWidthInput = document.getElementById('input_w_wood_mm');
  const blockHeightInput = document.getElementById('input_h_wood_mm');
  const woodGrade = document.getElementById('input_wood_grade')?.value || 'D40';

  const allowedBlockLengths = [1000, 1100, 1200, 1300, 1400, 1500, 1600];
  const availableBlockLengths = allowedBlockLengths.filter(length => length > W_track_mm);
  Array.from(blockLengthInput.options).forEach(option => {
    option.disabled = Number(option.value) <= W_track_mm;
  });
  const selectedLength_mm = Number(blockLengthInput.value);
  const blockLength_mm = availableBlockLengths.includes(selectedLength_mm)
    ? selectedLength_mm
    : (availableBlockLengths[0] || allowedBlockLengths[allowedBlockLengths.length - 1]);
  if (availableBlockLengths.length > 0 && selectedLength_mm !== blockLength_mm) {
    blockLengthInput.value = String(blockLength_mm);
  }

  const lengthWarning = document.getElementById('woodLengthWarning');
  if (lengthWarning) {
    const invalidHardwoodLength = supportMode === 'hardwood' && availableBlockLengths.length === 0;
    lengthWarning.textContent = !invalidHardwoodLength
      ? ''
      : (currentLang === 'de'
        ? 'Keine Klotzlänge ist größer als die ausgewählte Schienenbreite. Schienenbreite verringern oder ein passendes Profil wählen.'
        : 'No block-length preset is greater than the selected track width. Reduce track width or select a suitable track profile.');
    lengthWarning.classList.toggle('hidden', !invalidHardwoodLength);
  }

  // Read without mutating text/number inputs mid-typing; commitNumberInput clamps on blur/change.
  const minBlockWidth_mm = 100;
  const maxBlockWidth_mm = 2000;
  const parsedWidth = parseFloat(blockWidthInput.value);
  const requestedBlockWidth_mm = clampSchematicValue(
    Number.isFinite(parsedWidth) ? parsedWidth : 200,
    minBlockWidth_mm,
    maxBlockWidth_mm
  );
  const blockWidth_mm = Math.max(minBlockWidth_mm, Math.round(requestedBlockWidth_mm / 100) * 100);
  const parsedGap = parseFloat(blockGapInput.value);
  const requestedGap_mm = clampSchematicValue(Number.isFinite(parsedGap) ? parsedGap : 0, 0, 2000);
  const maxBlockCount = Math.max(1, Math.min(20, Math.floor(L_base_mm / blockWidth_mm)));
  const parsedCount = parseFloat(blockCountInput.value);
  const blockCount = Math.round(clampSchematicValue(
    Number.isFinite(parsedCount) ? parsedCount : 5,
    1,
    maxBlockCount
  ));
  const maxGap_mm = blockCount > 1
    ? Math.max(0, (L_base_mm - blockCount * blockWidth_mm) / (blockCount - 1))
    : 0;
  const blockGap_mm = Math.min(requestedGap_mm, maxGap_mm);

  const parsedHeight = parseFloat(blockHeightInput.value);
  const blockHeight_mm = clampSchematicValue(Number.isFinite(parsedHeight) ? parsedHeight : 100, 10, 500);
  const gradeProps = TIMBER_GRADES[woodGrade] || TIMBER_GRADES.D40;
  const woodDensity_kg_m3 = gradeProps.density_kg_m3;
  const woodVolume_m3 = (blockCount * blockLength_mm * blockWidth_mm * blockHeight_mm) / 1e9;
  const isValidFootprint = supportMode !== 'hardwood' || availableBlockLengths.length > 0;
  const timberMass_kg = isValidFootprint ? woodVolume_m3 * woodDensity_kg_m3 : 0;

  const blocks = [];
  if (supportMode === 'hardwood') {
    const arrayLength_mm = blockCount * blockWidth_mm + (blockCount - 1) * blockGap_mm;
    for (let index = 0; index < blockCount; index += 1) {
      const start_mm = -arrayLength_mm / 2 + index * (blockWidth_mm + blockGap_mm);
      blocks.push({ start_mm, end_mm: start_mm + blockWidth_mm });
    }
  } else {
    blocks.push({ start_mm: -L_base_mm / 2, end_mm: L_base_mm / 2 });
  }

  // Dual 45° longitudinal dispersion rule:
  // - Track directly on slab: 45° spread occurs through steel track depth (h_track_mm).
  // - Hardwood block array: track spread removed; 45° spread applies only at hardwood-to-slab interface (h_slab_mm).
  const spreadDepth_mm = supportMode === 'hardwood' ? h_slab_mm : h_track_mm;
  const expanded = blocks
    .map(block => ({ left: block.start_mm - spreadDepth_mm, right: block.end_mm + spreadDepth_mm }))
    .sort((a, b) => a.left - b.left);
  const merged = [];
  expanded.forEach(interval => {
    const last = merged[merged.length - 1];
    if (last && interval.left <= last.right) last.right = Math.max(last.right, interval.right);
    else merged.push({ ...interval });
  });

  const L_eff_mm = merged.reduce((length, interval) => length + interval.right - interval.left, 0);
  const W_eff_mm = supportMode === 'hardwood' ? blockLength_mm : W_track_mm;
  const woodMass_kg = (supportMode === 'hardwood' && isValidFootprint) ? timberMass_kg : 0;
  return {
    supportMode, h_track_mm, h_slab_mm, spreadDepth_mm, L_base_mm, W_track_mm,
    L_eff_mm, W_eff_mm, blocks, expanded, merged, blockCount, blockLength_mm, blockGap_mm,
    blockWidth_mm, blockHeight_mm, woodVolume_m3, woodDensity_kg_m3, timberMass_kg, woodMass_kg,
    valid: isValidFootprint
  };
}

// Hook Configuration Selector: Config 1 (Single) vs Config 2 (Dual 50/50 Split)
function setHookConfig(cfg) {
  currentHookConfig = cfg;
  const btnSingle = document.getElementById('btnHookSingle');
  const btnDual = document.getElementById('btnHookDual');
  const spreadBox = document.getElementById('dualHookSpreadBox');
  const labelTitle = document.getElementById('label_x_title');
  const svgBadge = document.getElementById('svgConfigBadge');

  if (cfg === 'single') {
    btnSingle.className = 'py-2 px-2.5 rounded-xl border border-amber-500 bg-amber-950/40 text-amber-200 font-semibold text-left transition flex items-center justify-between';
    btnDual.className = 'py-2 px-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white font-semibold text-left transition flex items-center justify-between';
    spreadBox.classList.add('hidden');
    labelTitle.innerHTML = t('lbl_x_single');
    svgBadge.textContent = t('svg_cfg1_badge');
  } else {
    btnDual.className = 'py-2 px-2.5 rounded-xl border border-amber-500 bg-amber-950/40 text-amber-200 font-semibold text-left transition flex items-center justify-between';
    btnSingle.className = 'py-2 px-2.5 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white font-semibold text-left transition flex items-center justify-between';
    spreadBox.classList.remove('hidden');
    labelTitle.innerHTML = t('lbl_x_dual');
    svgBadge.textContent = t('svg_cfg2_badge');
  }

  const curL = parseFloat(document.getElementById('input_L').value) || 8000;
  syncParam('L', curL);
  runAnalysis();
}

// Tier 1 Basis Toggle: Spec max(F_crown) vs Total Factored Payload
function setTier1Basis(basis) {
  tier1Basis = basis;
  const btnCrown = document.getElementById('btnTier1Reaction');
  const btnPayload = document.getElementById('btnTier1Payload');
  const formulaLabel = document.getElementById('tier1CheckFormulaLabel');

  if (basis === 'crown') {
    btnCrown.className = 'px-2 py-0.5 rounded bg-sky-700 text-white font-semibold transition';
    btnPayload.className = 'px-2 py-0.5 rounded text-slate-400 hover:text-white transition';
    formulaLabel.innerHTML = t('tier1_formula_crown');
  } else {
    btnPayload.className = 'px-2 py-0.5 rounded bg-sky-700 text-white font-semibold transition';
    btnCrown.className = 'px-2 py-0.5 rounded text-slate-400 hover:text-white transition';
    formulaLabel.innerHTML = t('tier1_formula_payload');
  }
  runAnalysis();
}

// Mode Selector: Option A vs Option B
function setMode(mode) {
  currentMode = mode;
  const btnA = document.getElementById('btnModeA');
  const btnB = document.getElementById('btnModeB');
  const badge = document.getElementById('modeBadge');
  const gantryCapCard = document.getElementById('gantryCapacityCard');
  const stageContainer = document.getElementById('stageSelectorContainer');

  if (mode === 'A') {
    btnA.className = 'p-2.5 rounded-xl border border-sky-500 bg-sky-950/70 text-white font-medium text-left transition flex flex-col justify-between';
    btnB.className = 'p-2.5 rounded-xl border border-slate-800 bg-slate-950/50 text-slate-400 hover:text-white font-medium text-left transition flex flex-col justify-between';
    badge.textContent = t('mode_a_active');
    badge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800';
    gantryCapCard.classList.remove('opacity-40', 'pointer-events-none');
    stageContainer.classList.remove('opacity-40', 'pointer-events-none');
  } else {
    btnB.className = 'p-2.5 rounded-xl border border-sky-500 bg-sky-950/70 text-white font-medium text-left transition flex flex-col justify-between';
    btnA.className = 'p-2.5 rounded-xl border border-slate-800 bg-slate-950/50 text-slate-400 hover:text-white font-medium text-left transition flex flex-col justify-between';
    badge.textContent = t('mode_b_active');
    badge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700';
    gantryCapCard.classList.add('opacity-40', 'pointer-events-none');
    stageContainer.classList.add('opacity-40', 'pointer-events-none');
  }
  runAnalysis();
}

// Cylinder Extension Stage Selector (0=Retracted, 1, 2, 3)
function setStage(stageNum) {
  const gantryId = document.getElementById('select_gantry').value;
  const gantry = INVENTORY_GANTRIES.find(g => g.id === gantryId);
  if (gantry && !gantry.stages.some(s => s.num === stageNum)) {
    const maxStage = gantry.stages[gantry.stages.length - 1];
    currentStage = maxStage ? maxStage.num : 0;
  } else {
    currentStage = stageNum;
  }
  updateStageDisplay();
  runAnalysis();
}

function updateStageDisplay() {
  const gantryId = document.getElementById('select_gantry').value;
  const gantry = INVENTORY_GANTRIES.find(g => g.id === gantryId);
  if (!gantry) return;

  if (!gantry.stages.some(s => s.num === currentStage)) {
    const maxStage = gantry.stages[gantry.stages.length - 1];
    currentStage = maxStage ? maxStage.num : 0;
  }

  [0, 1, 2, 3].forEach(n => {
    const btn = document.getElementById(`btnStage${n}`);
    if (!btn) return;
    const hasStage = gantry.stages.some(s => s.num === n);
    btn.disabled = !hasStage;
    if (!hasStage) {
      btn.className = 'py-1.5 px-1.5 rounded-lg bg-slate-950 text-slate-600 transition text-center border border-slate-900 opacity-35 cursor-not-allowed';
    } else if (n === currentStage) {
      btn.className = 'py-1.5 px-1.5 rounded-lg bg-indigo-600 text-white font-bold transition text-center shadow-sm';
    } else {
      btn.className = 'py-1.5 px-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition text-center border border-slate-800';
    }
  });

  document.getElementById('stageStatusBadge').textContent = `${getStageLabel(currentStage)} ${t('stage_active_suffix')}`;

  const stageInfo = gantry.stages.find(s => s.num === currentStage) || gantry.stages[0];
  const alertEl = document.getElementById('missingStageAlert');

  document.getElementById('disp_stage_height').textContent = `${stageInfo.H} mm`;

  if (stageInfo.cap2pt !== null) {
    const cap_kN = (stageInfo.cap2pt * G_CONST) / 1000.0;
    document.getElementById('disp_stage_cap').textContent = `${fmtInt(stageInfo.cap2pt)} kg (${fmt(cap_kN, 1)} kN)`;
    alertEl.classList.add('hidden');
  } else {
    document.getElementById('disp_stage_cap').textContent = t('no_2pt_rating');
    alertEl.classList.remove('hidden');
  }
}

// Custom Stepper Button Handler & On-Blur Commit Helper
function stepInput(inputId, dir, paramName = null) {
  const el = document.getElementById(inputId);
  if (!el) return;
  const step = parseFloat(el.step) || 10;
  const min = !isNaN(parseFloat(el.min)) ? parseFloat(el.min) : 0;
  const max = !isNaN(parseFloat(el.max)) ? parseFloat(el.max) : Infinity;
  const cur = parseFloat(el.value) || 0;
  const nextVal = Math.max(min, Math.min(cur + (dir * step), max));

  if (paramName) {
    syncParam(paramName, nextVal, 'commit');
  } else {
    el.value = Math.round(nextVal);
    runAnalysis();
  }
}

function commitNumberInput(el) {
  if (!el) return;
  const min = !isNaN(parseFloat(el.min)) ? parseFloat(el.min) : 0;
  const max = !isNaN(parseFloat(el.max)) ? parseFloat(el.max) : Infinity;
  const val = parseFloat(el.value);
  el.value = isNaN(val) ? Math.round(min) : Math.round(Math.max(min, Math.min(val, max)));
  runAnalysis();
}

// Dual Slider / Numeric Input Sync with Non-Intrusive Typing Mode
function syncParam(param, rawVal, source = 'commit') {
  const isTyping = (source === 'typing');
  const val = parseFloat(rawVal);

  if (isTyping && (rawVal === '' || isNaN(val))) {
    return;
  }

  const rawL = parseFloat(document.getElementById('input_L').value);
  const curL = Math.max(500, isNaN(rawL) ? 8000 : rawL);

  if (param === 'L') {
    const clampedL = Math.max(500, Math.min(isNaN(val) ? 8000 : val, 30000));
    document.getElementById('range_L').value = Math.round(clampedL);
    document.getElementById('range_x').max = Math.round(clampedL);
    document.getElementById('range_L_spread').max = Math.round(clampedL);
    document.getElementById('label_x_max').textContent = `${Math.round(clampedL)} mm`;

    if (!isTyping) {
      document.getElementById('input_L').value = Math.round(clampedL);
      const curSpread = parseFloat(document.getElementById('input_L_spread').value) || 0;
      if (curSpread > clampedL) {
        syncParam('L_spread', clampedL, 'commit');
      }
      const curX = parseFloat(document.getElementById('input_x').value) || 0;
      syncParam('x', curX, 'commit');
      return;
    }
  } else if (param === 'L_spread') {
    const clampedSpread = Math.max(0, Math.min(isNaN(val) ? 0 : val, curL));
    document.getElementById('range_L_spread').value = Math.round(clampedSpread);
    document.getElementById('label_L_spread_val').textContent = Math.round(clampedSpread);

    if (!isTyping) {
      document.getElementById('input_L_spread').value = Math.round(clampedSpread);
      const curX = parseFloat(document.getElementById('input_x').value) || (curL / 2);
      syncParam('x', curX, 'commit');
      return;
    }
  } else if (param === 'x') {
    const halfSpread = currentHookConfig === 'dual'
      ? (Math.max(0, parseFloat(document.getElementById('input_L_spread').value) || 0) / 2.0)
      : 0;
    const minX = halfSpread;
    const maxX = Math.max(halfSpread, curL - halfSpread);
    const clampedX = Math.max(minX, Math.min(isNaN(val) ? minX : val, maxX));
    document.getElementById('range_x').value = Math.round(clampedX);
    if (!isTyping) {
      document.getElementById('input_x').value = Math.round(clampedX);
    }
  } else if (param === 'P_kg') {
    const clampedP = Math.max(0, isNaN(val) ? 0 : val);
    document.getElementById('range_P_kg').value = Math.round(clampedP);
    if (!isTyping) {
      document.getElementById('input_P_kg').value = Math.round(clampedP);
    }
  } else if (param === 'allowable_q') {
    const clampedQ = Math.max(5, Math.min(isNaN(val) ? 250 : val, 3000));
    document.getElementById('range_allowable_q').value = Math.round(clampedQ);
    if (!isTyping) {
      document.getElementById('input_allowable_q').value = Math.round(clampedQ);
    }
  }
  runAnalysis();
}

function centerHook() {
  const curL = parseFloat(document.getElementById('input_L').value) || 8000;
  syncParam('x', Math.round(curL / 2));
}

function resetDefaults() {
  document.getElementById('select_beam').value = "601029/030";
  onSelectBeam();
  document.getElementById('select_gantry').value = "308404";
  onSelectGantry();
  document.getElementById('select_track').value = "T1_4M";
  onSelectTrack();
  document.getElementById('input_h_slab_mm').value = 200;
  document.getElementById('input_h_wood_mm').value = 100;
  document.getElementById('input_w_wood_mm').value = 200;
  document.getElementById('input_l_wood_mm').value = 1300;
  document.getElementById('input_wood_count').value = 5;
  document.getElementById('input_wood_gap_mm').value = 200;
  setTrackSupportMode('slab');
  setMode('A');
  setStage(1);
  setHookConfig('single');
  setTier1Basis('crown');
  syncParam('L_spread', 2000);
  syncParam('P_kg', 45000);
  syncParam('x', 2500);
  document.getElementById('input_phi').value = "1.10";
  document.getElementById('input_alpha_h').value = "0.05";
  document.getElementById('input_level_tol').value = "2.0";
  document.getElementById('input_W_shift_kg').value = 170;
  document.getElementById('input_wood_grade').value = "D40";
  document.getElementById('input_q_basis').value = "working";
  syncParam('allowable_q', 250);
  runAnalysis();
}

function loadPreset(type) {
  if (type === 'turbine180') {
    document.getElementById('select_beam').value = "601039/040"; // HEM 1000 (L=12240mm)
    onSelectBeam();
    document.getElementById('select_gantry').value = "308422/424"; // Greiner 1000T
    onSelectGantry();
    document.getElementById('select_track').value = "T4_5M"; // Track Type 4 (H=500mm)
    onSelectTrack();
    setMode('A');
    setStage(2);
    setHookConfig('dual');
    syncParam('L_spread', 4000);
    syncParam('P_kg', 180000);
    centerHook();
    syncParam('allowable_q', 350);
  } else if (type === 'transformer85') {
    document.getElementById('select_beam').value = "601029/030"; // HEM 600
    onSelectBeam();
    document.getElementById('select_gantry').value = "308404"; // Greiner 620T
    onSelectGantry();
    document.getElementById('select_track').value = "T1_4M";
    onSelectTrack();
    setMode('A');
    setStage(1);
    setHookConfig('single');
    syncParam('P_kg', 85000);
    syncParam('x', 3000);
    syncParam('allowable_q', 250);
  } else if (type === 'press50') {
    document.getElementById('select_beam').value = "308496"; // Press Lifting Frame
    onSelectBeam();
    document.getElementById('select_gantry').value = "308301+"; // Lift Systems 360T
    onSelectGantry();
    document.getElementById('select_track').value = "T2_4M";
    onSelectTrack();
    setMode('A');
    setStage(1);
    setHookConfig('dual');
    syncParam('L_spread', 1600);
    syncParam('P_kg', 50000);
    centerHook();
    syncParam('allowable_q', 200);
  }
  runAnalysis();
}

function switchDiagramTab(tab) {
  currentDiagramTab = tab;
  const btnBmd = document.getElementById('btnTabBMD');
  const btnSfd = document.getElementById('btnTabSFD');

  if (tab === 'bmd') {
    btnBmd.className = 'px-3 py-1 rounded bg-sky-600 text-white font-medium transition';
    btnSfd.className = 'px-3 py-1 rounded text-slate-400 hover:text-white font-medium transition';
  } else {
    btnBmd.className = 'px-3 py-1 rounded text-slate-400 hover:text-white font-medium transition';
    btnSfd.className = 'px-3 py-1 rounded bg-sky-600 text-white font-medium transition';
  }
  runAnalysis();
}

// EN 1995-1-1 § 6.1.5 f_c,90,k [MPa] & EN 338 mean density [kg/m³] per strength class
const TIMBER_GRADES = {
  C24: { fc90k_MPa: 2.5, density_kg_m3: 420 },
  D30: { fc90k_MPa: 8.0, density_kg_m3: 640 },
  D40: { fc90k_MPa: 8.8, density_kg_m3: 700 },
  D70: { fc90k_MPa: 13.5, density_kg_m3: 900 }
};

// EN 1993-1-1 § 6.2.5 & § 6.3.2 ULS Flexural + Lateral-Torsional Buckling Check (1.35G + 1.50Q)
function computeBeamLtbCheck(beamObj, L_m, w_beam_kN_per_m, pointLoads, R_hook_A_kN, R_beam_A_kN) {
  const w_Ed = 1.35 * w_beam_kN_per_m;
  const R_Ed_A = 1.35 * R_beam_A_kN + 1.50 * R_hook_A_kN;
  const evalPositions = [];
  for (let i = 0; i <= 60; i++) evalPositions.push((L_m * i) / 60.0);
  pointLoads.forEach(pl => evalPositions.push(pl.x_m));

  let M_Ed = 0;
  for (const x of evalPositions) {
    let m = R_Ed_A * x - 0.5 * w_Ed * x * x;
    for (const pl of pointLoads) {
      if (pl.x_m < x) m -= (1.50 * pl.P_kN) * (x - pl.x_m);
    }
    if (m > M_Ed) M_Ed = m;
  }

  const Wply = beamObj.Wply || 6425;
  const Iz = beamObj.Iz || 13530;
  const It = beamObj.It || 685;
  const Iw = beamObj.Iw || 10910;
  const fy = beamObj.fy || 355;
  const M_c_Rd = Wply * fy * 1e-3; // [kNm] with gamma_M0 = 1.0

  if (beamObj.closed) {
    return { M_Ed, M_c_Rd, M_cr: Infinity, chi_LT: 1.0, M_b_Rd: M_c_Rd, util_ltb: (M_Ed / Math.max(1e-6, M_c_Rd)) * 100.0 };
  }

  const E = 210000;
  const G = 81000;
  const L_cr = Math.max(100, L_m * 1000.0);
  const Iz_mm4 = Iz * 1e4;
  const It_mm4 = It * 1e4;
  const Iw_mm6 = Iw * 1e9;
  const N_cr_z = (Math.PI * Math.PI * E * Iz_mm4) / (L_cr * L_cr);
  const M_cr_Nmm = N_cr_z * Math.sqrt((Iw_mm6 / Iz_mm4) + (L_cr * L_cr * G * It_mm4) / (Math.PI * Math.PI * E * Iz_mm4));
  const M_cr = M_cr_Nmm / 1e6;
  const lambda_LT = Math.sqrt(Math.max(0, M_c_Rd / Math.max(1e-6, M_cr)));
  const alpha_LT = (beamObj.H / Math.max(1, beamObj.W)) <= 2.0 ? 0.34 : 0.49;
  const lambda_LT0 = 0.4;
  const beta = 0.75;

  let chi_LT = 1.0;
  if (lambda_LT > lambda_LT0) {
    const phi_LT = 0.5 * (1.0 + alpha_LT * (lambda_LT - lambda_LT0) + beta * lambda_LT * lambda_LT);
    chi_LT = Math.min(1.0, 1.0 / (phi_LT + Math.sqrt(Math.max(0, phi_LT * phi_LT - beta * lambda_LT * lambda_LT))));
  }

  const M_b_Rd = chi_LT * M_c_Rd;
  return { M_Ed, M_c_Rd, M_cr, chi_LT, M_b_Rd, util_ltb: (M_Ed / Math.max(1e-6, M_b_Rd)) * 100.0 };
}

function getEdgeStressFactor(u) {
  if (u <= 1 / 6) return 1.0 + 6.0 * u;
  if (u < 0.5) return 4.0 / (3.0 * (1.0 - 2.0 * u));
  return Infinity;
}

// MAIN STATICS, INTERNAL FORCES & GROUND BEARING ENGINE (ENG-WP-HGA-001 Rev 3.3 / 2006/42/EC)
function runAnalysis() {
  // 1. Extract Inputs (Dimensions in mm, Masses in kg)
  const L_mm = Math.max(500, parseFloat(document.getElementById('input_L').value) || 8000);
  const L_m = L_mm / 1000.0;

  let L_spread_mm = currentHookConfig === 'dual'
    ? Math.max(0, Math.min(parseFloat(document.getElementById('input_L_spread').value) || 0, L_mm))
    : 0;
  const halfSpread_mm = L_spread_mm / 2.0;

  let x_mm = parseFloat(document.getElementById('input_x').value);
  if (isNaN(x_mm)) x_mm = L_mm / 2.0;
  x_mm = Math.max(halfSpread_mm, Math.min(x_mm, L_mm - halfSpread_mm));
  const x_m = x_mm / 1000.0;

  const phi = parseFloat(document.getElementById('input_phi').value) || 1.10;
  const alpha_h = parseFloat(document.getElementById('input_alpha_h')?.value ?? '0.05') || 0;
  const level_tol = parseFloat(document.getElementById('input_level_tol')?.value ?? '2.0') || 2.0;
  const wood_grade = document.getElementById('input_wood_grade')?.value || 'D40';
  const q_basis = document.getElementById('input_q_basis')?.value || 'working';
  const P_kg = Math.max(0, parseFloat(document.getElementById('input_P_kg').value) || 0);
  const m_beam_kg = Math.max(0, parseFloat(document.getElementById('input_W_beam_kg').value) || 0);
  const m_shift_kg = Math.max(0, parseFloat(document.getElementById('input_W_shift_kg').value) || 0);
  const m_tower_kg = Math.max(0, parseFloat(document.getElementById('input_W_lift_unit_kg').value) || 0);
  const m_track_kg = Math.max(0, parseFloat(document.getElementById('input_W_track_unit_kg').value) || 0);

  const W_base_mm = Math.max(100, parseFloat(document.getElementById('input_base_width_mm').value) || 1560);
  const L_base_mm = Math.max(100, parseFloat(document.getElementById('input_base_length_mm').value) || 2090);
  const h_track_mm = Math.max(50, parseFloat(document.getElementById('input_h_track_mm').value) || 300);
  const W_track_mm = Math.max(100, parseFloat(document.getElementById('input_w_track_mm').value) || 1225);
  const h_slab_mm = Math.max(50, parseFloat(document.getElementById('input_h_slab_mm').value) || 200);
  const bearingFootprint = getTrackBearingFootprint(L_base_mm, W_track_mm, h_track_mm, h_slab_mm);
  const allowable_q = Math.max(1, parseFloat(document.getElementById('input_allowable_q').value) || 250);

  const m_track_support_kg = m_track_kg + bearingFootprint.woodMass_kg;

  // Selected Inventory References
  const beamId = document.getElementById('select_beam').value;
  const beamObj = INVENTORY_BEAMS.find(b => b.id === beamId) || INVENTORY_BEAMS[0];
  const gantryId = document.getElementById('select_gantry').value;
  const gantryObj = INVENTORY_GANTRIES.find(g => g.id === gantryId) || INVENTORY_GANTRIES[0];
  const stageInfo = gantryObj.stages.find(s => s.num === currentStage) || gantryObj.stages[0];
  const trackId = document.getElementById('select_track').value;
  const trackObj = INVENTORY_TRACKS.find(tr => tr.id === trackId) || INVENTORY_TRACKS[0];

  // 2. Section 2.1: Applied Suspended Load & Dynamic Amplification
  const P_dyn_kg = P_kg * phi;
  const P_dyn_kN = (P_dyn_kg * G_CONST) / 1000.0;

  // 3. Section 2.2: Beam-Level Statics (Config 1: Single Hook vs Config 2: Dual Hook 50/50 Split)
  let R_hook_A_kN = 0;
  let R_hook_B_kN = 0;
  let pointLoads = [];
  let x1_mm = x_mm;
  let x2_mm = x_mm;

  if (currentHookConfig === 'single') {
    R_hook_A_kN = P_dyn_kN * ((L_mm - x_mm) / L_mm);
    R_hook_B_kN = P_dyn_kN * (x_mm / L_mm);
    pointLoads = [{ x_m: x_mm / 1000.0, x_mm: x_mm, P_kN: P_dyn_kN, P_kg: P_dyn_kg }];
    document.getElementById('tb_hook_rule').textContent = `${t('rule_single_hook')} (x=${Math.round(x_mm)}mm)`;
  } else {
    x1_mm = x_mm - halfSpread_mm;
    x2_mm = x_mm + halfSpread_mm;
    const P1_kN = P_dyn_kN / 2.0;
    const P2_kN = P_dyn_kN / 2.0;
    R_hook_A_kN = (P_dyn_kN / 2.0) * (((L_mm - x1_mm) + (L_mm - x2_mm)) / L_mm);
    R_hook_B_kN = (P_dyn_kN / 2.0) * ((x1_mm + x2_mm) / L_mm);
    pointLoads = [
      { x_m: x1_mm / 1000.0, x_mm: x1_mm, P_kN: P1_kN, P_kg: P_dyn_kg / 2.0 },
      { x_m: x2_mm / 1000.0, x_mm: x2_mm, P_kN: P2_kN, P_kg: P_dyn_kg / 2.0 }
    ];
    document.getElementById('disp_x1_mm').textContent = `${Math.round(x1_mm)} mm`;
    document.getElementById('disp_x2_mm').textContent = `${Math.round(x2_mm)} mm`;
    document.getElementById('tb_hook_rule').textContent = `${t('rule_dual_hook')} (${Math.round(x1_mm)}, ${Math.round(x2_mm)}mm)`;
  }

  const R_hook_A_kg = (R_hook_A_kN * 1000.0) / G_CONST;
  const R_hook_B_kg = (R_hook_B_kN * 1000.0) / G_CONST;

  // Header Lifting Beam Deadweight Distribution
  const W_beam_kN = (m_beam_kg * G_CONST) / 1000.0;
  const w_beam_kN_per_m = W_beam_kN / L_m;
  const R_beam_A_kN = W_beam_kN / 2.0;
  const R_beam_B_kN = W_beam_kN / 2.0;
  const R_beam_half_kg = m_beam_kg / 2.0;

  // Total Crown Reaction Force (F_crown)
  const F_crown_A_kN = R_hook_A_kN + R_beam_A_kN;
  const F_crown_B_kN = R_hook_B_kN + R_beam_B_kN;
  const F_crown_A_kg = R_hook_A_kg + R_beam_half_kg;
  const F_crown_B_kg = R_hook_B_kg + R_beam_half_kg;

  // 4. Section 3.1: Cumulative Vertical Base Force (F_base,i)
  // Note: gantry unitWt already includes the complete cylinder & top pin head assembly from beam to tracks.
  const W_shift_kN = (m_shift_kg * G_CONST) / 1000.0;
  const W_tracks_tower_kN = (m_tower_kg * G_CONST) / 1000.0;
  const W_track_unit_kN = (m_track_support_kg * G_CONST) / 1000.0;

  const F_base_A_kN = F_crown_A_kN + W_shift_kN + W_tracks_tower_kN + W_track_unit_kN;
  const F_base_B_kN = F_crown_B_kN + W_shift_kN + W_tracks_tower_kN + W_track_unit_kN;
  const F_base_A_kg = F_crown_A_kg + m_shift_kg + m_tower_kg + m_track_support_kg;
  const F_base_B_kg = F_crown_B_kg + m_shift_kg + m_tower_kg + m_track_support_kg;

  // 5. Section 3.2: 45° Longitudinal Dispersion (h_track on direct slab vs h_slab at hardwood–concrete interface)
  const L_eff_mm = bearingFootprint.L_eff_mm;
  const W_eff_mm = bearingFootprint.W_eff_mm;
  const A_eff_m2 = (L_eff_mm * W_eff_mm) / 1000000.0;

  // Eurocode ULS (1.35G + 1.50Q) vs Working (1.00 F_base) slab bearing demand
  const G_base_A_kN = R_beam_A_kN + W_shift_kN + W_tracks_tower_kN + W_track_unit_kN;
  const G_base_B_kN = R_beam_B_kN + W_shift_kN + W_tracks_tower_kN + W_track_unit_kN;
  const F_slab_eval_A_kN = q_basis === 'uls' ? (1.35 * G_base_A_kN + 1.50 * R_hook_A_kN) : F_base_A_kN;
  const F_slab_eval_B_kN = q_basis === 'uls' ? (1.35 * G_base_B_kN + 1.50 * R_hook_B_kN) : F_base_B_kN;

  const q_A_kNm2 = F_slab_eval_A_kN / A_eff_m2;
  const q_B_kNm2 = F_slab_eval_B_kN / A_eff_m2;

  const util_floor_A = (q_A_kNm2 / allowable_q) * 100.0;
  const util_floor_B = (q_B_kNm2 / allowable_q) * 100.0;

  const dispPrefixEl = document.getElementById('formula_disp_prefix');
  if (dispPrefixEl) {
    dispPrefixEl.textContent = t(bearingFootprint.supportMode === 'hardwood' ? 'formula_prefix_hardwood' : 'formula_prefix_slab');
  }

  const dispWoodMassEl = document.getElementById('disp_wood_mass_kg');
  if (bearingFootprint.valid) {
    document.getElementById('disp_L_eff').textContent = `${Math.round(L_eff_mm)} mm (${fmt(L_eff_mm / 1000.0, 2)} m)`;
    if (dispWoodMassEl) dispWoodMassEl.textContent = `${fmtInt(bearingFootprint.timberMass_kg)} kg`;
    if (bearingFootprint.supportMode === 'hardwood') {
      document.getElementById('formula_disp_calc').textContent = currentLang === 'de'
        ? `${bearingFootprint.blockCount} Klötze (${Math.round(bearingFootprint.blockWidth_mm)} mm, ${Math.round(bearingFootprint.blockGap_mm)} mm Abstand), 45° Holz–Decke (h_slab=${Math.round(h_slab_mm)} mm) = ${Math.round(L_eff_mm)} mm`
        : `${bearingFootprint.blockCount} blocks (${Math.round(bearingFootprint.blockWidth_mm)} mm, ${Math.round(bearingFootprint.blockGap_mm)} mm gap), 45° timber–slab (h_slab=${Math.round(h_slab_mm)} mm) = ${Math.round(L_eff_mm)} mm`;
      document.getElementById('woodArraySummary').textContent = currentLang === 'de'
        ? `${bearingFootprint.blockCount} Klötze: ${Math.round(bearingFootprint.blockLength_mm)} × ${Math.round(bearingFootprint.blockWidth_mm)} × ${Math.round(bearingFootprint.blockHeight_mm)} mm (${fmt(bearingFootprint.woodVolume_m3, 3)} m³ × ${bearingFootprint.woodDensity_kg_m3} kg/m³ = ${fmtInt(bearingFootprint.timberMass_kg)} kg je Auflager); ${Math.round(bearingFootprint.blockGap_mm)} mm Abstand.`
        : `${bearingFootprint.blockCount} blocks: ${Math.round(bearingFootprint.blockLength_mm)} × ${Math.round(bearingFootprint.blockWidth_mm)} × ${Math.round(bearingFootprint.blockHeight_mm)} mm (${fmt(bearingFootprint.woodVolume_m3, 3)} m³ × ${bearingFootprint.woodDensity_kg_m3} kg/m³ = ${fmtInt(bearingFootprint.timberMass_kg)} kg per support); ${Math.round(bearingFootprint.blockGap_mm)} mm gaps.`;
    } else {
      document.getElementById('formula_disp_calc').textContent = `${Math.round(L_base_mm)} + 2(${Math.round(h_track_mm)}) = ${Math.round(L_eff_mm)} mm`;
      document.getElementById('woodArraySummary').textContent = t('support_direct_summary');
    }
    document.getElementById('disp_W_eff').textContent = `${Math.round(W_eff_mm)} mm (${t('zero_lateral')})`;
    document.getElementById('disp_A_eff').textContent = `${fmt(A_eff_m2, 3)} m²`;
  } else {
    if (dispWoodMassEl) dispWoodMassEl.textContent = '—';
    document.getElementById('disp_L_eff').textContent = '—';
    document.getElementById('disp_W_eff').textContent = '—';
    document.getElementById('disp_A_eff').textContent = '—';
    const invalidMsg = currentLang === 'de'
      ? 'Die Hartholzklotzlänge muss größer als die Schienenbreite sein; Auflagergebnisse nicht verfügbar.'
      : 'Hardwood block length must exceed the selected track width; bearing results are unavailable.';
    document.getElementById('formula_disp_calc').textContent = invalidMsg;
    document.getElementById('woodArraySummary').textContent = invalidMsg;
  }

  // 6. Section 4 Tier 1: Lifting Beam Safe Capacity Ceiling
  const beam_rated_kg = beamObj.cap;
  const beam_rated_kN = (beam_rated_kg * G_CONST) / 1000.0;
  const F_crown_max_kN = Math.max(F_crown_A_kN, F_crown_B_kN);
  const F_crown_max_kg = Math.max(F_crown_A_kg, F_crown_B_kg);

  const applied_tier1_kN = tier1Basis === 'crown' ? F_crown_max_kN : P_dyn_kN;
  const applied_tier1_kg = tier1Basis === 'crown' ? F_crown_max_kg : P_dyn_kg;
  const util_beam = (applied_tier1_kN / beam_rated_kN) * 100.0;
  const reserve_beam_kN = beam_rated_kN - applied_tier1_kN;
  const reserve_beam_kg = beam_rated_kg - applied_tier1_kg;

  document.getElementById('card_beam_crown_max_kN').textContent = `${fmt(F_crown_max_kN, 1)} kN`;
  document.getElementById('card_beam_crown_max_kg').textContent = `${fmtInt(F_crown_max_kg)} kg (${t('max_end_suffix')})`;
  document.getElementById('card_beam_factored_kN').textContent = `${fmt(P_dyn_kN, 1)} kN`;
  document.getElementById('card_beam_factored_kg').textContent = `${fmtInt(P_dyn_kg)} kg (φ=${phi.toFixed(2)})`;
  document.getElementById('card_beam_max_kN').textContent = `${fmt(beam_rated_kN, 1)} kN`;
  document.getElementById('card_beam_max_kg').textContent = `${fmtInt(beam_rated_kg)} kg (${fmt(beam_rated_kg/1000, 1)} t)`;

  const reserveEl = document.getElementById('card_beam_reserve_kN');
  if (reserve_beam_kN >= 0) {
    reserveEl.textContent = `+${fmt(reserve_beam_kN, 1)} kN`;
    reserveEl.className = 'text-emerald-400 font-bold text-sm';
    document.getElementById('card_beam_reserve_kg').textContent = `+${fmtInt(reserve_beam_kg)} kg ${t('buffer_suffix')}`;
  } else {
    reserveEl.textContent = `${fmt(reserve_beam_kN, 1)} kN`;
    reserveEl.className = 'text-rose-400 font-bold text-sm';
    document.getElementById('card_beam_reserve_kg').textContent = `${fmtInt(reserve_beam_kg)} kg ${t('deficit_suffix')}`;
  }

  const barBeam = document.getElementById('barBeamUtil');
  const badgeBeam = document.getElementById('badgeBeamCap');
  barBeam.style.width = Math.min(100, Math.max(0, util_beam)) + '%';
  if (util_beam > 100) {
    barBeam.className = 'bg-rose-500 h-2.5 rounded-full transition-all duration-300';
    badgeBeam.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-950 text-rose-300 border border-rose-800';
    badgeBeam.textContent = `${t('status_overload')} (${Math.round(util_beam)}%)`;
  } else if (util_beam > 85) {
    barBeam.className = 'bg-amber-500 h-2.5 rounded-full transition-all duration-300';
    badgeBeam.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-950 text-amber-300 border border-amber-800';
    badgeBeam.textContent = `${t('status_caution')} (${Math.round(util_beam)}%)`;
  } else {
    barBeam.className = 'bg-emerald-500 h-2.5 rounded-full transition-all duration-300';
    badgeBeam.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-950 text-emerald-400 border border-emerald-800';
    badgeBeam.textContent = `${t('status_pass')} (${Math.round(util_beam)}% ${t('status_utilized')})`;
  }

  // Solution 1: Stock Span Overrun + EN 1993-1-1 ULS Flexural & LTB Verification
  const isSpanOverrun = !beamObj.isCustom && (L_mm > beamObj.L + 1e-6);
  const spanInlineEl = document.getElementById('spanOverrunInline');
  const spanAlertEl = document.getElementById('spanOverrunAlert');
  const tier1SpanEl = document.getElementById('tier1SpanCheckLabel');
  if (isSpanOverrun) {
    const msg = currentLang === 'de'
      ? `Stützweite L (${Math.round(L_mm)} mm) überschreitet die Lieferlänge des gewählten Trägers ${beamObj.profile} (${beamObj.L} mm). Größeren Träger oder CUSTOM wählen.`
      : `Clear span L (${Math.round(L_mm)} mm) exceeds stocked ${beamObj.profile} beam length (${beamObj.L} mm). Select a longer inventory beam or CUSTOM.`;
    spanInlineEl.textContent = msg;
    spanInlineEl.classList.remove('hidden');
    document.getElementById('spanOverrunText').textContent = msg;
    spanAlertEl.classList.remove('hidden');
    tier1SpanEl.textContent = currentLang === 'de' ? `Spannweite: ÜBERLAUF (>${beamObj.L} mm)` : `Span: OVERRUN (>${beamObj.L} mm)`;
    tier1SpanEl.className = 'text-rose-400 font-bold';
  } else {
    spanInlineEl.classList.add('hidden');
    spanAlertEl.classList.add('hidden');
    tier1SpanEl.textContent = beamObj.isCustom
      ? (currentLang === 'de' ? `Spannweite: CUSTOM (${Math.round(L_mm)} mm)` : `Span: CUSTOM (${Math.round(L_mm)} mm)`)
      : (currentLang === 'de' ? `Spannweite: OK (max ${beamObj.L} mm)` : `Span: OK (stock ${beamObj.L} mm)`);
    tier1SpanEl.className = 'text-slate-400';
  }

  const ltb = computeBeamLtbCheck(beamObj, L_m, w_beam_kN_per_m, pointLoads, R_hook_A_kN, R_beam_A_kN);
  document.getElementById('val_M_Ed').textContent = `${fmt(ltb.M_Ed, 1)} kNm`;
  document.getElementById('val_Mb_Rd').textContent = `${fmt(ltb.M_b_Rd, 1)} kNm`;
  document.getElementById('val_chi_LT').textContent = ltb.chi_LT.toFixed(2);
  updateUtilizationBar('barLtbUtil', 'badgeLtbUtil', ltb.util_ltb, 'h-1.5');

  // 7. Section 4 Tier 2: Gantry Cylinder Extension Check (Option A vs Option B)
  let maxTowerUtil = 0;
  let hasMissingRating = false;
  const badgeGantry = document.getElementById('badgeGantryStage');
  if (currentMode === 'A') {
    const stageCap_kg = stageInfo.cap2pt;
    if (stageCap_kg !== null) {
      const stageCap_kN = (stageCap_kg * G_CONST) / 1000.0;
      const util_tower_A = (F_crown_A_kN / stageCap_kN) * 100.0;
      const util_tower_B = (F_crown_B_kN / stageCap_kN) * 100.0;
      maxTowerUtil = Math.max(util_tower_A, util_tower_B);

      document.getElementById('val_util_tower_A').textContent = `${Math.round(util_tower_A)}%`;
      document.getElementById('val_util_tower_B').textContent = `${Math.round(util_tower_B)}%`;
      document.getElementById('val_tower_applied_A').textContent = `${fmt(F_crown_A_kN, 1)} kN (${fmtInt(F_crown_A_kg)} kg)`;
      document.getElementById('val_tower_applied_B').textContent = `${fmt(F_crown_B_kN, 1)} kN (${fmtInt(F_crown_B_kg)} kg)`;
      document.getElementById('val_tower_limit_A').textContent = `${fmt(stageCap_kN, 1)} kN (${fmtInt(stageCap_kg)} kg)`;
      document.getElementById('val_tower_limit_B').textContent = `${fmt(stageCap_kN, 1)} kN (${fmtInt(stageCap_kg)} kg)`;

      updateSimpleBar('barTowerA', util_tower_A);
      updateSimpleBar('barTowerB', util_tower_B);

      if (maxTowerUtil > 100) {
        badgeGantry.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-950 text-rose-300 border border-rose-800';
        badgeGantry.textContent = `${t('status_stage_overload')} (${Math.round(maxTowerUtil)}%)`;
      } else if (maxTowerUtil > 85) {
        badgeGantry.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-950 text-amber-300 border border-amber-800';
        badgeGantry.textContent = `${t('status_stage_caution')} (${Math.round(maxTowerUtil)}%)`;
      } else {
        badgeGantry.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-950 text-emerald-400 border border-emerald-800';
        badgeGantry.textContent = `${t('status_pass')} (${getStageLabel(currentStage)} OK)`;
      }
    } else {
      hasMissingRating = true;
      document.getElementById('val_util_tower_A').textContent = 'N/A';
      document.getElementById('val_util_tower_B').textContent = 'N/A';
      document.getElementById('val_tower_applied_A').textContent = `${fmt(F_crown_A_kN, 1)} kN (${fmtInt(F_crown_A_kg)} kg)`;
      document.getElementById('val_tower_applied_B').textContent = `${fmt(F_crown_B_kN, 1)} kN (${fmtInt(F_crown_B_kg)} kg)`;
      document.getElementById('val_tower_limit_A').textContent = t('no_2pt_rating');
      document.getElementById('val_tower_limit_B').textContent = t('no_2pt_rating');
      updateSimpleBar('barTowerA', 0);
      updateSimpleBar('barTowerB', 0);
      badgeGantry.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-950 text-amber-300 border border-amber-800';
      badgeGantry.textContent = t('no_2pt_rating');
    }
  } else {
    badgeGantry.className = 'font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-slate-800 text-slate-300 border border-slate-700';
    badgeGantry.textContent = t('status_bypassed');
  }

  // Solutions 2 & 5: Lateral Side-Pull / Skewing Stability & Synchronized Out-of-Level Limits
  const H_stage_m = (stageInfo ? stageInfo.H : 3016) / 1000.0;
  const H_lat_A_kN = alpha_h * F_crown_A_kN;
  const H_lat_B_kN = alpha_h * F_crown_B_kN;
  const H_lat_max_kN = Math.max(H_lat_A_kN, H_lat_B_kN);
  const M_lat_A_kNm = H_lat_A_kN * H_stage_m;
  const M_lat_B_kNm = H_lat_B_kN * H_stage_m;

  const e_trans_A_mm = F_base_A_kN > 0 ? (M_lat_A_kNm * 1000.0) / F_base_A_kN : 0;
  const e_trans_B_mm = F_base_B_kN > 0 ? (M_lat_B_kNm * 1000.0) / F_base_B_kN : 0;
  const u_A = Math.max(e_trans_A_mm / W_base_mm, e_trans_A_mm / L_base_mm);
  const u_B = Math.max(e_trans_B_mm / W_base_mm, e_trans_B_mm / L_base_mm);
  const u_max = Math.max(u_A, u_B);
  const halfBasePct = u_max * 200.0; // e / (B/2) * 100%

  const k_edge_A = getEdgeStressFactor(u_A);
  const k_edge_B = getEdgeStressFactor(u_B);
  const q_peak_A_kNm2 = Number.isFinite(k_edge_A) ? q_A_kNm2 * k_edge_A : Infinity;
  const q_peak_B_kNm2 = Number.isFinite(k_edge_B) ? q_B_kNm2 * k_edge_B : Infinity;

  const stabilityFail = u_max >= 0.5 || (bearingFootprint.valid && Math.max(q_peak_A_kNm2, q_peak_B_kNm2) > allowable_q * 1.5 && u_max > 1 / 6);
  const stabilityWarn = u_max > 1 / 6;
  const stabilityAlertEl = document.getElementById('stabilityAlert');
  if (stabilityFail || stabilityWarn) {
    stabilityAlertEl.classList.remove('hidden');
    if (u_max >= 0.5) {
      document.getElementById('stabilityAlertText').textContent = currentLang === 'de'
        ? `KIPPGEFAHR: Seitenzug/Schrägzug H=${fmt(H_lat_max_kN, 1)} kN bei Bolzenhöhe ${Math.round(H_stage_m * 1000)} mm übersteigt die halbe Fußbreite (${Math.round(halfBasePct)}% > 100%). Ausleger verbreitern oder Abspannung vorsehen.`
        : `OVERTURNING HAZARD: Side-pull H=${fmt(H_lat_max_kN, 1)} kN at crown height ${Math.round(H_stage_m * 1000)} mm exceeds half-base width (${Math.round(halfBasePct)}% > 100%). Widen stabilizer base or install lateral bracing.`;
    } else {
      document.getElementById('stabilityAlertText').textContent = currentLang === 'de'
        ? `Kernweitenüberschreitung (${Math.round(halfBasePct)}% von B/2 > 33% Kern): Sohlabhebung auf der entlasteten Seite und erhöhte Kantenpressung q_peak=${fmt(Math.max(q_peak_A_kNm2, q_peak_B_kNm2), 1)} kN/m². Schrägzug minimieren.`
        : `Middle-third core exceeded (${Math.round(halfBasePct)}% of half-base > 33% core): partial uplift at heel and amplified edge stress q_peak=${fmt(Math.max(q_peak_A_kNm2, q_peak_B_kNm2), 1)} kN/m². Control side-pull and travel acceleration.`;
    }
  } else {
    stabilityAlertEl.classList.add('hidden');
  }

  const deltaH_span_mm = L_m * level_tol;
  const deltaH_base_mm = (W_base_mm / 1000.0) * level_tol;
  document.getElementById('disp_H_horiz').textContent = currentLang === 'de'
    ? `${fmt(H_lat_max_kN, 1)} kN / Turm`
    : `${fmt(H_lat_max_kN, 1)} kN / tower`;
  const stabRatioEl = document.getElementById('disp_stability_ratio');
  stabRatioEl.textContent = currentLang === 'de'
    ? `${Math.round(halfBasePct)}% von B/2`
    : `${Math.round(halfBasePct)}% of half-base`;
  stabRatioEl.className = u_max >= 0.5 ? 'text-rose-400 font-bold' : (u_max > 1 / 6 ? 'text-amber-300 font-bold' : 'text-emerald-400 font-bold');
  document.getElementById('disp_level_span').textContent = `±${fmt(deltaH_span_mm, 1)} mm`;
  document.getElementById('md_level_summary').textContent = currentLang === 'de'
    ? `Stützweite: ±${fmt(deltaH_span_mm, 1)} mm | Fuß W_base: ±${fmt(deltaH_base_mm, 1)} mm (${fmt(level_tol, 1)} mm/m)`
    : `Span: ±${fmt(deltaH_span_mm, 1)} mm | Shoe W_base: ±${fmt(deltaH_base_mm, 1)} mm (${fmt(level_tol, 1)} mm/m)`;

  // 8. Section 4 Tier 3: Floor & Slab Bearing Stress Check + Tier 3B Hardwood Crushing
  document.getElementById('disp_F_base_A').textContent = `${fmt(F_base_A_kN, 1)} kN (${fmtInt(F_base_A_kg)} kg)`;
  document.getElementById('disp_F_base_B').textContent = `${fmt(F_base_B_kN, 1)} kN (${fmtInt(F_base_B_kg)} kg)`;
  const qLimitPrefix = q_basis === 'uls'
    ? (currentLang === 'de' ? 'Grenzwert q_Rd' : 'ULS q_Rd')
    : t('lbl_allowable_prefix');
  document.getElementById('label_gauge_limit_A').textContent = `${qLimitPrefix}: ${Math.round(allowable_q)} kN/m²`;
  document.getElementById('label_gauge_limit_B').textContent = `${qLimitPrefix}: ${Math.round(allowable_q)} kN/m²`;

  const qPeakAEl = document.getElementById('disp_q_peak_A');
  const qPeakBEl = document.getElementById('disp_q_peak_B');

  if (bearingFootprint.valid) {
    document.getElementById('val_q_A').innerHTML = `${fmt(q_A_kNm2, 1)} <span class="text-xs text-sky-400 font-sans">kN/m&sup2;</span>`;
    document.getElementById('val_q_B').innerHTML = `${fmt(q_B_kNm2, 1)} <span class="text-xs text-indigo-400 font-sans">kN/m&sup2;</span>`;
    qPeakAEl.textContent = Number.isFinite(q_peak_A_kNm2) ? `${fmt(q_peak_A_kNm2, 1)} kN/m²` : (currentLang === 'de' ? 'KIPPEN / ABHEBEN' : 'UPLIFT');
    qPeakBEl.textContent = Number.isFinite(q_peak_B_kNm2) ? `${fmt(q_peak_B_kNm2, 1)} kN/m²` : (currentLang === 'de' ? 'KIPPEN / ABHEBEN' : 'UPLIFT');
    qPeakAEl.className = !Number.isFinite(q_peak_A_kNm2) || q_peak_A_kNm2 > allowable_q ? 'text-rose-400 font-bold' : 'text-amber-300 font-bold';
    qPeakBEl.className = !Number.isFinite(q_peak_B_kNm2) || q_peak_B_kNm2 > allowable_q ? 'text-rose-400 font-bold' : 'text-amber-300 font-bold';
    updateUtilizationBar('barUtilA', 'badgeUtilA', util_floor_A);
    updateUtilizationBar('barUtilB', 'badgeUtilB', util_floor_B);

    const max_q = Math.max(q_A_kNm2, q_B_kNm2);
    const mattingAlert = document.getElementById('mattingAlert');
    if (max_q > allowable_q) {
      mattingAlert.classList.remove('hidden');
      const reqArea = Math.max(F_slab_eval_A_kN, F_slab_eval_B_kN) / allowable_q;
      document.getElementById('mattingAlertText').textContent = currentLang === 'de'
        ? `Die maximale Bodenpressung (${fmt(max_q, 1)} kN/m²) überschreitet den zulässigen Deckengrenzwert (${Math.round(allowable_q)} kN/m²). Lastverteilplatten (Hartholz-Baggermatten oder Stahlplatten) mit einer Mindestkontaktfläche von ≥ ${fmt(reqArea, 2)} m² je Turm sind erforderlich.`
        : `Peak ground contact stress (${fmt(max_q, 1)} kN/m²) exceeds allowable slab limit (${Math.round(allowable_q)} kN/m²). Engineer load-spreading mats (hardwood crane mats or composite steel plates) with minimum effective area ≥ ${fmt(reqArea, 2)} m² per tower.`;
    } else {
      mattingAlert.classList.add('hidden');
    }
  } else {
    document.getElementById('val_q_A').textContent = '—';
    document.getElementById('val_q_B').textContent = '—';
    qPeakAEl.textContent = '—';
    qPeakBEl.textContent = '—';
    updateUtilizationBar('barUtilA', 'badgeUtilA', 0);
    updateUtilizationBar('barUtilB', 'badgeUtilB', 0);
    document.getElementById('mattingAlert').classList.add('hidden');
  }

  // Solution 4: EN 1995-1-1 § 6.1.5 Timber Crushing Perpendicular to Grain (when Hardwood active)
  const timberCard = document.getElementById('timberCrushingCard');
  let util_timber = 0;
  let sigma_c90_A = 0;
  let sigma_c90_B = 0;
  let fc90d_kNm2 = ((0.90 * ((TIMBER_GRADES[wood_grade] || TIMBER_GRADES.D40).fc90k_MPa)) / 1.30) * 1000.0;
  let A_rail_timber_m2 = 0;
  if (bearingFootprint.supportMode === 'hardwood' && bearingFootprint.valid) {
    timberCard.classList.remove('hidden');
    A_rail_timber_m2 = (bearingFootprint.blockCount * bearingFootprint.blockWidth_mm * W_track_mm) / 1000000.0;
    const W_rail_only_kN = (m_track_kg * G_CONST) / 1000.0;
    const F_timber_Ed_A = 1.35 * (R_beam_A_kN + W_shift_kN + W_tracks_tower_kN + W_rail_only_kN) + 1.50 * R_hook_A_kN;
    const F_timber_Ed_B = 1.35 * (R_beam_B_kN + W_shift_kN + W_tracks_tower_kN + W_rail_only_kN) + 1.50 * R_hook_B_kN;
    sigma_c90_A = A_rail_timber_m2 > 0 ? F_timber_Ed_A / A_rail_timber_m2 : 0;
    sigma_c90_B = A_rail_timber_m2 > 0 ? F_timber_Ed_B / A_rail_timber_m2 : 0;
    const sigma_c90_max = Math.max(sigma_c90_A, sigma_c90_B);
    util_timber = (sigma_c90_max / fc90d_kNm2) * 100.0;
    document.getElementById('val_sigma_c90').textContent = `${fmtInt(sigma_c90_max)} kN/m²`;
    document.getElementById('val_fc90d').textContent = `${fmtInt(fc90d_kNm2)} kN/m² (${wood_grade})`;
    document.getElementById('val_rail_timber_area').textContent = `${fmt(A_rail_timber_m2, 3)} m²`;
    updateUtilizationBar('barTimberCrush', 'badgeTimberCrush', util_timber, 'h-2');
  } else {
    timberCard.classList.add('hidden');
  }

  // 9. Section 2.3: Internal Forces (SFD & BMD sampled at 60 equidistant intervals)
  const sfdBmd = renderChart60Intervals(L_m, F_crown_A_kN, w_beam_kN_per_m, pointLoads);
  document.getElementById('label_M_max_val').textContent = `M_max: ${fmt(sfdBmd.M_max, 1)} kNm`;
  document.getElementById('label_V_max_val').textContent = `V_max: ${fmt(sfdBmd.V_max, 1)} kN`;

  // 10. Update Interactive Form Labels
  document.getElementById('label_L_val').textContent = Math.round(L_mm);
  document.getElementById('label_x_val').textContent = Math.round(x_mm);
  const pct_span = L_mm > 0 ? (x_mm / L_mm * 100.0) : 50;
  document.getElementById('label_x_pct').textContent = `${Math.round(pct_span)}%`;
  document.getElementById('label_P_kg').textContent = fmtInt(P_kg);
  document.getElementById('label_P_t').textContent = fmt(P_kg / 1000.0, 1);
  document.getElementById('label_phi').textContent = phi.toFixed(2);
  document.getElementById('phiStaticWarning')?.classList.toggle('hidden', phi >= 1.05);
  document.querySelectorAll('.tb_phi_tag').forEach(el => el.textContent = phi.toFixed(2));
  document.getElementById('label_allowable_q_val').textContent = Math.round(allowable_q);

  // 11. Asymmetry Warning Banner
  const totalCrownReaction_kN = F_crown_A_kN + F_crown_B_kN;
  const ratioA = totalCrownReaction_kN > 0 ? (F_crown_A_kN / totalCrownReaction_kN) : 0.5;
  const alertEl = document.getElementById('imbalanceAlert');
  if (ratioA > 0.70 || ratioA < 0.30) {
    alertEl.classList.remove('hidden');
    const heavyPct = Math.round((ratioA > 0.70 ? ratioA : (1 - ratioA)) * 100);
    if (currentLang === 'de') {
      const heavySideDE = ratioA > 0.70 ? 'Auflager A (Linker Turm)' : 'Auflager B (Rechter Turm)';
      document.getElementById('imbalanceText').textContent =
        `${heavySideDE} trägt ${heavyPct}% der gesamten Kopfauflagerkraft (${fmt(Math.max(F_crown_A_kN, F_crown_B_kN), 1)} kN). Synchronlauf der Hydraulikzylinder und differentielle Deckensetzung prüfen.`;
    } else {
      const heavySideEN = ratioA > 0.70 ? 'Support A (Left Tower)' : 'Support B (Right Tower)';
      document.getElementById('imbalanceText').textContent =
        `${heavySideEN} carries ${heavyPct}% of total crown reaction (${fmt(Math.max(F_crown_A_kN, F_crown_B_kN), 1)} kN). Verify synchronous cylinder extension control and differential slab settlement.`;
    }
  } else {
    alertEl.classList.add('hidden');
  }

  // 12. Progressive Deadweight & Equilibrium Breakdown Table
  document.getElementById('tb_hook_A').textContent = `${fmt(R_hook_A_kN, 1)} kN (${fmtInt(R_hook_A_kg)} kg)`;
  document.getElementById('tb_hook_B').textContent = `${fmt(R_hook_B_kN, 1)} kN (${fmtInt(R_hook_B_kg)} kg)`;
  document.getElementById('tb_hook_tot').textContent = `${fmt(P_dyn_kN, 1)} kN (${fmtInt(P_dyn_kg)} kg)`;

  document.getElementById('tb_beam_A').textContent = `${fmt(R_beam_A_kN, 1)} kN (${fmtInt(R_beam_half_kg)} kg)`;
  document.getElementById('tb_beam_B').textContent = `${fmt(R_beam_B_kN, 1)} kN (${fmtInt(R_beam_half_kg)} kg)`;
  document.getElementById('tb_beam_tot').textContent = `${fmt(W_beam_kN, 1)} kN (${fmtInt(m_beam_kg)} kg)`;

  document.getElementById('tb_crown_react_A').textContent = `${fmt(F_crown_A_kN, 1)} kN (${fmtInt(F_crown_A_kg)} kg)`;
  document.getElementById('tb_crown_react_B').textContent = `${fmt(F_crown_B_kN, 1)} kN (${fmtInt(F_crown_B_kg)} kg)`;
  document.getElementById('tb_crown_react_tot').textContent = `${fmt(F_crown_A_kN + F_crown_B_kN, 1)} kN (${fmtInt(F_crown_A_kg + F_crown_B_kg)} kg)`;

  document.getElementById('tb_crown_wt_A').textContent = `${fmt(W_shift_kN, 1)} kN (${fmtInt(m_shift_kg)} kg)`;
  document.getElementById('tb_crown_wt_B').textContent = `${fmt(W_shift_kN, 1)} kN (${fmtInt(m_shift_kg)} kg)`;
  document.getElementById('tb_crown_wt_tot').textContent = `${fmt(W_shift_kN * 2, 1)} kN (${fmtInt(m_shift_kg * 2)} kg)`;

  document.getElementById('tb_gantry_unit_A').textContent = `${fmt(W_tracks_tower_kN, 1)} kN (${fmtInt(m_tower_kg)} kg)`;
  document.getElementById('tb_gantry_unit_B').textContent = `${fmt(W_tracks_tower_kN, 1)} kN (${fmtInt(m_tower_kg)} kg)`;
  document.getElementById('tb_gantry_unit_tot').textContent = `${fmt(W_tracks_tower_kN * 2, 1)} kN (${fmtInt(m_tower_kg * 2)} kg)`;

  document.getElementById('tb_track_wt_A').textContent = `${fmt(W_track_unit_kN, 1)} kN (${fmtInt(m_track_support_kg)} kg)`;
  document.getElementById('tb_track_wt_B').textContent = `${fmt(W_track_unit_kN, 1)} kN (${fmtInt(m_track_support_kg)} kg)`;
  document.getElementById('tb_track_wt_tot').textContent = `${fmt(W_track_unit_kN * 2, 1)} kN (${fmtInt(m_track_support_kg * 2)} kg)`;
  document.getElementById('tb_track_wt_label').textContent = t(bearingFootprint.supportMode === 'hardwood' ? 'tr_track_dw_wood' : 'tr_track_dw');
  document.getElementById('tb_track_wt_rule').textContent = bearingFootprint.supportMode === 'hardwood'
    ? t('tr_track_dw_wood_rule')
    : t('tr_track_dw_rule');

  document.getElementById('tb_base_A').textContent = `${fmt(F_base_A_kN, 1)} kN (${fmtInt(F_base_A_kg)} kg)`;
  document.getElementById('tb_base_B').textContent = `${fmt(F_base_B_kN, 1)} kN (${fmtInt(F_base_B_kg)} kg)`;
  document.getElementById('tb_base_tot').textContent = `${fmt(F_base_A_kN + F_base_B_kN, 1)} kN (${fmtInt(F_base_A_kg + F_base_B_kg)} kg)`;

  const pressA_el = document.getElementById('tb_press_A');
  const pressB_el = document.getElementById('tb_press_B');
  document.getElementById('tb_allow_label').textContent = `${t('lbl_limit_prefix')}: ${Math.round(allowable_q)} kN/m²`;

  if (bearingFootprint.valid) {
    document.getElementById('tb_area_A').textContent = `${fmt(A_eff_m2, 3)} m²`;
    document.getElementById('tb_area_B').textContent = `${fmt(A_eff_m2, 3)} m²`;
    document.getElementById('tb_area_tot').textContent = `${fmt(A_eff_m2 * 2, 3)} m²`;
    document.getElementById('tb_dims_label').textContent = `${Math.round(L_eff_mm)} × ${Math.round(W_eff_mm)} mm`;

    pressA_el.textContent = `${fmt(q_A_kNm2, 1)} kN/m²`;
    pressB_el.textContent = `${fmt(q_B_kNm2, 1)} kN/m²`;
    pressA_el.className = `py-2.5 px-2 text-right text-sm font-bold ${q_A_kNm2 > allowable_q ? 'text-rose-400' : 'text-emerald-400'}`;
    pressB_el.className = `py-2.5 px-2 text-right text-sm font-bold ${q_B_kNm2 > allowable_q ? 'text-rose-400' : 'text-emerald-400'}`;

    document.getElementById('tb_util_A').textContent = `${Math.round(util_floor_A)}%`;
    document.getElementById('tb_util_B').textContent = `${Math.round(util_floor_B)}%`;
  } else {
    document.getElementById('tb_area_A').textContent = '—';
    document.getElementById('tb_area_B').textContent = '—';
    document.getElementById('tb_area_tot').textContent = '—';
    document.getElementById('tb_dims_label').textContent = '—';
    pressA_el.textContent = '—';
    pressB_el.textContent = '—';
    pressA_el.className = 'py-2.5 px-2 text-right text-sm font-bold text-slate-400';
    pressB_el.className = 'py-2.5 px-2 text-right text-sm font-bold text-slate-400';
    document.getElementById('tb_util_A').textContent = '—';
    document.getElementById('tb_util_B').textContent = '—';
  }

  // Solutions 1-4 Breakdown Table Rows
  document.getElementById('tb_ltb_med').textContent = `${fmt(ltb.M_Ed, 1)} kNm`;
  document.getElementById('tb_ltb_mbrd').textContent = `${fmt(ltb.M_b_Rd, 1)} kNm`;
  const tbLtbUtilEl = document.getElementById('tb_ltb_util');
  tbLtbUtilEl.textContent = `${Math.round(ltb.util_ltb)}%`;
  tbLtbUtilEl.className = `py-2 px-2 text-right font-bold ${ltb.util_ltb > 100 ? 'text-rose-400' : (ltb.util_ltb > 85 ? 'text-amber-300' : 'text-sky-300')}`;
  document.getElementById('tb_ltb_rule').textContent = `χ_LT = ${ltb.chi_LT.toFixed(2)} | S${beamObj.fy || 355}`;

  document.getElementById('tb_qpeak_A').textContent = bearingFootprint.valid ? (Number.isFinite(q_peak_A_kNm2) ? `${fmt(q_peak_A_kNm2, 1)} kN/m²` : 'UPLIFT') : '—';
  document.getElementById('tb_qpeak_B').textContent = bearingFootprint.valid ? (Number.isFinite(q_peak_B_kNm2) ? `${fmt(q_peak_B_kNm2, 1)} kN/m²` : 'UPLIFT') : '—';
  document.getElementById('tb_h_tot').textContent = `${fmt(H_lat_A_kN + H_lat_B_kN, 1)} kN`;
  document.getElementById('tb_qpeak_rule').textContent = `α_h=${alpha_h.toFixed(2)} | ${Math.round(halfBasePct)}% B/2`;

  if (bearingFootprint.supportMode === 'hardwood' && bearingFootprint.valid) {
    document.getElementById('tb_timber_A').textContent = `${fmtInt(sigma_c90_A)} kN/m²`;
    document.getElementById('tb_timber_B').textContent = `${fmtInt(sigma_c90_B)} kN/m²`;
    document.getElementById('tb_timber_lim').textContent = `${fmtInt(fc90d_kNm2)} kN/m²`;
    document.getElementById('tb_timber_rule').textContent = `${wood_grade} (${Math.round(util_timber)}%)`;
  } else {
    document.getElementById('tb_timber_A').textContent = '—';
    document.getElementById('tb_timber_B').textContent = '—';
    document.getElementById('tb_timber_lim').textContent = '—';
    document.getElementById('tb_timber_rule').textContent = currentLang === 'de' ? 'N/A (Direkt Beton)' : 'N/A (Direct Slab)';
  }

  const finalStatus = document.getElementById('tb_final_status');
  const stageFail = currentMode === 'A' && !hasMissingRating && maxTowerUtil > 100;
  const stageWarn = currentMode === 'A' && !hasMissingRating && maxTowerUtil > 85;
  const timberFail = bearingFootprint.supportMode === 'hardwood' && bearingFootprint.valid && util_timber > 100;
  const timberWarn = bearingFootprint.supportMode === 'hardwood' && bearingFootprint.valid && util_timber > 85;
  if (!bearingFootprint.valid) {
    finalStatus.textContent = t('status_invalid_hardwood');
    finalStatus.className = 'py-2.5 px-2.5 text-right font-bold text-rose-400';
  } else if (isSpanOverrun || ltb.util_ltb > 100 || util_beam > 100 || stageFail || util_floor_A > 100 || util_floor_B > 100 || timberFail || stabilityFail) {
    finalStatus.textContent = t('status_fail_overload');
    finalStatus.className = 'py-2.5 px-2.5 text-right font-bold text-rose-400';
  } else if (hasMissingRating) {
    finalStatus.textContent = t('status_unverified_2pt');
    finalStatus.className = 'py-2.5 px-2.5 text-right font-bold text-amber-400';
  } else if (ltb.util_ltb > 85 || util_beam > 85 || stageWarn || util_floor_A > 85 || util_floor_B > 85 || timberWarn || stabilityWarn || phi < 1.05) {
    finalStatus.textContent = t('status_caution_85');
    finalStatus.className = 'py-2.5 px-2.5 text-right font-bold text-amber-400';
  } else {
    finalStatus.textContent = t('status_pass_verified');
    finalStatus.className = 'py-2.5 px-2.5 text-right font-bold text-emerald-400';
  }

  // 13. Render Read-Only Structural, Tower & Track Schematics
  const schematicPayload = {
    L_mm, x_mm, L_m, x_m,
    hookConfig: currentHookConfig,
    L_spread_mm, x1_mm, x2_mm,
    F_crown_A_kN, F_crown_B_kN,
    F_base_A_kN, F_base_B_kN,
    q_A_kNm2, q_B_kNm2,
    P_kg, P_dyn_kN, phi,
    W_base_mm, L_base_mm, h_track_mm, W_track_mm, h_slab_mm, L_eff_mm, W_eff_mm, A_eff_m2,
    supportMode: bearingFootprint.supportMode, bearingFootprint,
    blockCount: bearingFootprint.blockCount, blockLength_mm: bearingFootprint.blockLength_mm,
    blockGap_mm: bearingFootprint.blockGap_mm, blockWidth_mm: bearingFootprint.blockWidth_mm,
    blockHeight_mm: bearingFootprint.blockHeight_mm,
    m_beam_kg, m_shift_kg, m_tower_kg, m_track_kg, m_track_support_kg,
    allowable_q,
    beamObj, gantryObj, trackObj, stageInfo,
    currentStage, stageLabel: getStageLabel(currentStage), stageHeight: stageInfo.H
  };
  drawSchematic(schematicPayload);
  drawGantryUnitSchematic(schematicPayload);
  drawTrackUnitSchematic(schematicPayload);
}

function updateUtilizationBar(barId, badgeId, utilPct, barHeightClass = 'h-2.5') {
  const bar = document.getElementById(barId);
  const badge = document.getElementById(badgeId);
  const clamped = Math.min(100, Math.max(0, utilPct));

  bar.style.width = clamped + '%';
  badge.textContent = `${Math.round(utilPct)}% ${t('status_utilized')}`;

  if (utilPct > 100) {
    bar.className = `bg-rose-500 ${barHeightClass} rounded-full transition-all duration-300`;
    badge.className = 'font-mono text-[11px] px-2 py-0.5 rounded-full font-semibold bg-rose-950 text-rose-300 border border-rose-800';
  } else if (utilPct > 85) {
    bar.className = `bg-amber-500 ${barHeightClass} rounded-full transition-all duration-300`;
    badge.className = 'font-mono text-[11px] px-2 py-0.5 rounded-full font-semibold bg-amber-950 text-amber-300 border border-amber-800';
  } else {
    bar.className = `bg-emerald-500 ${barHeightClass} rounded-full transition-all duration-300`;
    badge.className = 'font-mono text-[11px] px-2 py-0.5 rounded-full font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800';
  }
}

function updateSimpleBar(barId, utilPct) {
  const bar = document.getElementById(barId);
  const clamped = Math.min(100, Math.max(0, utilPct));
  bar.style.width = clamped + '%';
  if (utilPct > 100) bar.className = 'bg-rose-500 h-2 rounded-full transition-all duration-300';
  else if (utilPct > 85) bar.className = 'bg-amber-500 h-2 rounded-full transition-all duration-300';
  else bar.className = 'bg-emerald-500 h-2 rounded-full transition-all duration-300';
}

function clampSchematicValue(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function getSchematicLayout(L_mm) {
  const clampedL = clampSchematicValue(L_mm, 500, 30000);
  const spanPx = 320 + ((clampedL - 500) / 29500) * 220;
  return { leftX: 400 - spanPx / 2, rightX: 400 + spanPx / 2, spanPx };
}

// HELPER: RENDER SIMPLIFIED FRONTAL HYDRAULIC GANTRY TOWER (FOLLOWING CAD REFERENCE DRAWING)
function renderFrontalTowerAssemblySVG(cx, topY, shoeBotY, shoeHalfW, stageNum) {
  const totalH = Math.max(110, shoeBotY - topY);
  const swivelW = 24;
  const swivelH = 5;
  const crownW = 50;
  const crownH = 15;
  const clevisY = topY + swivelH;

  // Housing & bogie proportions
  const wheelH = 10;
  const baseBeamH = 8;
  const housingBotY = shoeBotY - wheelH - baseBeamH;
  const housingH = Math.max(46, totalH * 0.42);
  const housingTopY = housingBotY - housingH;
  const housingW = 54;

  // Twin cylinders between crown clevis and housing collar
  const cylTopY = clevisY + crownH;
  const cylTotalH = Math.max(24, housingTopY - cylTopY);
  const cylCenterOffset = 13;
  const barrelW = 18;
  const step1H = Math.min(10, cylTotalH * 0.22);
  const step2H = Math.min(12, cylTotalH * 0.25);
  const barrelTopY = cylTopY + step1H + step2H;
  const barrelH = Math.max(10, housingTopY - barrelTopY);

  const pinL = cx - cylCenterOffset;
  const pinR = cx + cylCenterOffset;

  // 4-wheel bogie layout across frontal W_base
  const effShoeHalf = Math.max(26, shoeHalfW);
  const wheelW = 8;
  const outerWheelOffset = effShoeHalf - wheelW / 2 - 1;
  const innerWheelOffset = Math.max(11, effShoeHalf * 0.52);

  return `
    <!-- Top Swivel & Side-Shift Pad -->
    <rect x="${cx - swivelW / 2}" y="${topY}" width="${swivelW}" height="${swivelH}" stroke-width="1.4" />
    <!-- Crown Header Top Plate & Twin Clevis Blocks -->
    <rect x="${cx - crownW / 2}" y="${clevisY}" width="${crownW}" height="3.5" stroke-width="1.5" />
    <rect x="${pinL - 9}" y="${clevisY + 3.5}" width="18" height="${crownH - 3.5}" stroke-width="1.5" />
    <rect x="${pinR - 9}" y="${clevisY + 3.5}" width="18" height="${crownH - 3.5}" stroke-width="1.5" />
    <line x1="${cx}" y1="${clevisY + 3.5}" x2="${cx}" y2="${clevisY + crownH}" stroke-width="1.5" />
    <circle cx="${pinL}" cy="${clevisY + 9}" r="3.2" fill="#fff" stroke-width="1.5" />
    <circle cx="${pinR}" cy="${clevisY + 9}" r="3.2" fill="#fff" stroke-width="1.5" />

    <!-- Twin Telescopic Cylinders (Left & Right) -->
    ${[pinL, pinR].map(px => `
      <rect x="${px - (barrelW * 0.62) / 2}" y="${cylTopY}" width="${barrelW * 0.62}" height="${step1H}" stroke-width="1.3" />
      <rect x="${px - (barrelW * 0.80) / 2}" y="${cylTopY + step1H}" width="${barrelW * 0.80}" height="${step2H}" stroke-width="1.4" />
      <rect x="${px - barrelW / 2}" y="${barrelTopY}" width="${barrelW}" height="${barrelH}" stroke-width="1.6" />
      ${stageNum >= 2 ? `<line x1="${px - barrelW * 0.4}" y1="${cylTopY + step1H * 0.5}" x2="${px + barrelW * 0.4}" y2="${cylTopY + step1H * 0.5}" stroke-width="1.1" />` : ''}
      ${stageNum >= 3 ? `<line x1="${px - barrelW * 0.45}" y1="${cylTopY + step1H + step2H * 0.5}" x2="${px + barrelW * 0.45}" y2="${cylTopY + step1H + step2H * 0.5}" stroke-width="1.1" />` : ''}
    `).join('')}

    <!-- Lower Tower Housing Collar & Side Ears -->
    <rect x="${cx - (housingW + 6) / 2}" y="${housingTopY - 3.5}" width="${housingW + 6}" height="3.5" stroke-width="1.5" />
    <rect x="${cx - housingW / 2 - 2.5}" y="${housingTopY}" width="2.5" height="10" stroke-width="1.2" />
    <rect x="${cx + housingW / 2}" y="${housingTopY}" width="2.5" height="10" stroke-width="1.2" />

    <!-- Lower Tower Chassis Box with Control Panel & Indicator Slots -->
    <rect x="${cx - housingW / 2}" y="${housingTopY}" width="${housingW}" height="${housingH}" stroke-width="1.8" />
    <rect x="${cx - 12}" y="${housingTopY + housingH * 0.20}" width="24" height="${housingH * 0.38}" stroke-width="1.4" />
    <rect class="cad-solid" x="${cx - 4.5}" y="${housingTopY + housingH * 0.72}" width="2.5" height="6.5" />
    <rect class="cad-solid" x="${cx + 2.0}" y="${housingTopY + housingH * 0.72}" width="2.5" height="6.5" />

    <!-- Bottom Wheeled Base Shoe (Frontal Width W_base) -->
    <rect x="${cx - effShoeHalf}" y="${housingBotY}" width="${effShoeHalf * 2}" height="${baseBeamH}" stroke-width="1.7" />
    <rect x="${cx - effShoeHalf}" y="${housingBotY - 6}" width="7" height="6" stroke-width="1.4" />
    <rect x="${cx + effShoeHalf - 7}" y="${housingBotY - 6}" width="7" height="6" stroke-width="1.4" />

    <!-- 4 Bogie Rollers / Wheels & Central Tie Bar -->
    <rect x="${cx - innerWheelOffset}" y="${shoeBotY - wheelH + 2}" width="${innerWheelOffset * 2}" height="4" stroke-width="1.3" />
    <rect x="${cx - outerWheelOffset - wheelW / 2}" y="${shoeBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.6" />
    <rect x="${cx - innerWheelOffset - wheelW / 2}" y="${shoeBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.6" />
    <rect x="${cx + innerWheelOffset - wheelW / 2}" y="${shoeBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.6" />
    <rect x="${cx + outerWheelOffset - wheelW / 2}" y="${shoeBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.6" />
  `;
}

// 1) DRAW FREE-BODY PORTAL SCHEMATIC (FRONTAL VIEW: 0° LATERAL SPREAD; READ-ONLY)
function drawSchematic(d) {
  const g = document.getElementById('svgLayer');
  if (!g) return;
  g.innerHTML = '';

  const { leftX, rightX, spanPx } = getSchematicLayout(d.L_mm);

  const beamY = 82;
  const beamHeight = 24;
  const groundY = 330;

  // Frontal widths: W_base and W_track (NO 45° lateral spread in frontal view!)
  const shoeHalfPx = clampSchematicValue(d.W_base_mm * 0.024, 24, 58);
  const trackHalfPx = clampSchematicValue(d.W_track_mm * 0.024, 22, 58);
  const contactHalfPx = clampSchematicValue(d.W_eff_mm * 0.024, 12, 58);
  const trackHeightPx = clampSchematicValue(d.h_track_mm * 0.055, 10, 44);
  const woodHeightPx = d.supportMode === 'hardwood'
    ? clampSchematicValue(d.blockHeight_mm * 0.08, 6, 28)
    : 0;
  const trackBottomY = groundY - woodHeightPx;
  const trackTopY = trackBottomY - trackHeightPx;

  const centerPx = leftX + (d.x_mm / d.L_mm) * spanPx;

  let html = `
    <text x="24" y="27" font-size="11" font-weight="bold" letter-spacing="1">${t('svg_drawing_header')}</text>
    <text x="776" y="27" font-size="9" text-anchor="end">ENG-WP-HGA-001  |  FRONTAL</text>
    <line x1="20" y1="38" x2="780" y2="38" stroke="#64748b" stroke-width="1" />
  `;

  // 1. Gantry Tracks & 0° Transverse Contact Patch (Vertical Edges — Track Contact Patch ≈ Base Width)
  [
    { x: leftX, q: d.q_A_kNm2, F: d.F_base_A_kN, label: 'A', towerTitle: t('svg_tower_a') },
    { x: rightX, q: d.q_B_kNm2, F: d.F_base_B_kN, label: 'B', towerTitle: t('svg_tower_b') }
  ].forEach(track => {
    const trackLeft = track.x - trackHalfPx;
    const trackRight = track.x + trackHalfPx;

    html += `
      <!-- Track Cross-Section Profile (Frontal View: W_track × h_track, 0° Transverse Spread) -->
      <rect class="cad-track" x="${trackLeft}" y="${trackTopY}" width="${trackHalfPx * 2}" height="${trackHeightPx}" stroke-width="1.8" />
      <line x1="${trackLeft}" y1="${trackTopY + 3.5}" x2="${trackRight}" y2="${trackTopY + 3.5}" stroke-width="1.2" />
      <line x1="${trackLeft}" y1="${trackBottomY - 3.5}" x2="${trackRight}" y2="${trackBottomY - 3.5}" stroke-width="1.2" />
      <line x1="${track.x - trackHalfPx * 0.38}" y1="${trackTopY}" x2="${track.x - trackHalfPx * 0.38}" y2="${trackBottomY}" stroke-width="1.2" />
      <line x1="${track.x + trackHalfPx * 0.38}" y1="${trackTopY}" x2="${track.x + trackHalfPx * 0.38}" y2="${trackBottomY}" stroke-width="1.2" />
      ${d.supportMode === 'hardwood' ? `<rect class="cad-timber" x="${track.x - contactHalfPx}" y="${trackBottomY}" width="${contactHalfPx * 2}" height="${woodHeightPx}" />` : ''}
      <line class="cad-contact-line" x1="${track.x - contactHalfPx}" y1="${groundY}" x2="${track.x + contactHalfPx}" y2="${groundY}" />

      <!-- 90° Vertical Edge Indicators (0° Transverse Dispersion) -->
      <line x1="${track.x - contactHalfPx}" y1="${groundY - 4}" x2="${track.x - contactHalfPx}" y2="${groundY + 12}" stroke-width="1.2" stroke-dasharray="3,2" />
      <line x1="${track.x + contactHalfPx}" y1="${groundY - 4}" x2="${track.x + contactHalfPx}" y2="${groundY + 12}" stroke-width="1.2" stroke-dasharray="3,2" />
      <text x="${track.x - contactHalfPx - 4}" y="${groundY - 3}" font-size="8.5" text-anchor="end">0°</text>
      <text x="${track.x + contactHalfPx + 4}" y="${groundY - 3}" font-size="8.5" text-anchor="start">0°</text>

      <!-- Uniform Ground Contact Stress Distribution Arrows under W_eff = W_track -->
      <rect class="cad-contact-patch" x="${track.x - contactHalfPx}" y="${groundY}" width="${contactHalfPx * 2}" height="10" stroke-width="1.2" />
      ${[-0.75, -0.38, 0, 0.38, 0.75].map(f => {
        const ax = track.x + f * contactHalfPx;
        return `<line x1="${ax}" y1="${groundY + 10}" x2="${ax}" y2="${groundY + 1}" stroke-width="1.2" />`;
      }).join('')}

      <!-- Frontal Width Callout & Contact Stress -->
      <text x="${track.x}" y="${groundY + 23}" font-size="9.5" font-weight="bold" text-anchor="middle">q_${track.label}: ${d.bearingFootprint.valid ? fmt(track.q, 1) + ' kN/m²' : '—'}  (F_base,${track.label}: ${fmt(track.F, 1)} kN)</text>
      <text x="${track.x}" y="${groundY + 35}" font-size="8.5" text-anchor="middle">W_eff = ${Math.round(d.W_eff_mm)} mm (0°)  |  W_track = ${Math.round(d.W_track_mm)} mm</text>
      ${d.supportMode === 'hardwood' ? `<text x="${track.x}" y="${groundY + 47}" font-size="8" text-anchor="middle">${t('svg_hardwood_length')} = ${Math.round(d.blockLength_mm)} mm (&gt; W_track)</text>` : ''}
    `;

    // 2. Render Simplified Frontal Hydraulic Gantry Tower Assembly
    html += renderFrontalTowerAssemblySVG(
      track.x,
      beamY + beamHeight,
      trackTopY,
      shoeHalfPx,
      d.currentStage
    );
    html += `<text x="${track.x}" y="${beamY - 9}" font-size="10" font-weight="bold" text-anchor="middle">${track.towerTitle}</text>`;
  });

  // 3. Header Lifting Beam & Span Dimension
  html += `
    <rect x="${leftX - 42}" y="${beamY}" width="${spanPx + 84}" height="${beamHeight}" stroke-width="1.8" />
    <line x1="${leftX - 42}" y1="${beamY + 4}" x2="${rightX + 42}" y2="${beamY + 4}" stroke-width="1.1" />
    <line x1="${leftX - 42}" y1="${beamY + beamHeight - 4}" x2="${rightX + 42}" y2="${beamY + beamHeight - 4}" stroke-width="1.1" />
    <line x1="${leftX - 42}" y1="${beamY + beamHeight / 2}" x2="${rightX + 42}" y2="${beamY + beamHeight / 2}" stroke-width="1" stroke-dasharray="5,3" />

    <!-- Span Dimension in mm -->
    <line x1="${leftX}" y1="${beamY - 24}" x2="${rightX}" y2="${beamY - 24}" stroke-width="1.5" />
    <line x1="${leftX}" y1="${beamY - 30}" x2="${leftX}" y2="${beamY - 18}" stroke-width="1.5" />
    <line x1="${rightX}" y1="${beamY - 30}" x2="${rightX}" y2="${beamY - 18}" stroke-width="1.5" />
    <text x="${(leftX + rightX) / 2}" y="${beamY - 28}" font-size="10.5" font-weight="bold" text-anchor="middle">${t('svg_clear_span')} = ${Math.round(d.L_mm)} mm</text>
  `;

  // 4. Hook Rigging (Config 1 Single Hook vs Config 2 Dual Hook 50/50 Split)
  const dropY = beamY + beamHeight;
  const loadBoxY = dropY + 70;

  if (d.hookConfig === 'single') {
    html += `
      <!-- Offset Dimension x in mm -->
      <line x1="${leftX}" y1="${dropY + 14}" x2="${centerPx}" y2="${dropY + 14}" stroke-width="1.4" />
      <line x1="${centerPx}" y1="${dropY + 8}" x2="${centerPx}" y2="${dropY + 20}" stroke-width="1.4" />
      <text x="${(leftX + centerPx) / 2}" y="${dropY + 25}" font-size="9.5" text-anchor="middle">x = ${Math.round(d.x_mm)} mm</text>

      <!-- Single Trolley Lug & Slings -->
      <rect x="${centerPx - 15}" y="${beamY - 3}" width="30" height="${beamHeight + 6}" stroke-width="1.8" />
      <line x1="${centerPx}" y1="${dropY + 9}" x2="${centerPx - 28}" y2="${loadBoxY}" stroke-width="1.8" />
      <line x1="${centerPx}" y1="${dropY + 9}" x2="${centerPx + 28}" y2="${loadBoxY}" stroke-width="1.8" />
      <circle cx="${centerPx}" cy="${dropY + 9}" r="4" fill="#fff" stroke-width="1.5" />

      <!-- Payload Box -->
      <rect x="${centerPx - 50}" y="${loadBoxY}" width="100" height="42" stroke-width="1.8" />
      <text x="${centerPx}" y="${loadBoxY + 16}" font-size="9.5" font-weight="bold" text-anchor="middle">P_dyn = ${fmt(d.P_dyn_kN, 1)} kN</text>
      <text x="${centerPx}" y="${loadBoxY + 32}" font-size="10.5" font-weight="bold" text-anchor="middle">${fmtInt(d.P_kg)} kg</text>

      <!-- Force Vector Arrow -->
      <line x1="${centerPx}" y1="${loadBoxY + 44}" x2="${centerPx}" y2="${loadBoxY + 70}" stroke-width="2.5" marker-end="url(#arrowDownAmber)" />
    `;
  } else {
    const hook1Px = leftX + (d.x1_mm / d.L_mm) * spanPx;
    const hook2Px = leftX + (d.x2_mm / d.L_mm) * spanPx;
    const boxWidth = Math.max(100, (hook2Px - hook1Px) + 38);

    html += `
      <!-- Center Offset x_center & Spread Dimension -->
      <line x1="${leftX}" y1="${dropY + 14}" x2="${centerPx}" y2="${dropY + 14}" stroke-width="1.2" stroke-dasharray="3,2" />
      <text x="${(leftX + centerPx) / 2}" y="${dropY + 25}" font-size="9.5" text-anchor="middle">x_center = ${Math.round(d.x_mm)} mm</text>

      <!-- Spread Bar Dimension -->
      <line x1="${hook1Px}" y1="${dropY + 36}" x2="${hook2Px}" y2="${dropY + 36}" stroke-width="1.4" />
      <text x="${centerPx}" y="${dropY + 48}" font-size="9.5" font-weight="bold" text-anchor="middle">L_spread = ${Math.round(d.L_spread_mm)} mm (50/50)</text>

      <!-- Dual Trolley Lugs & Vertical Hoist Lines -->
      <rect x="${hook1Px - 11}" y="${beamY - 3}" width="22" height="${beamHeight + 6}" stroke-width="1.6" />
      <rect x="${hook2Px - 11}" y="${beamY - 3}" width="22" height="${beamHeight + 6}" stroke-width="1.6" />

      <line x1="${hook1Px}" y1="${dropY + 3}" x2="${hook1Px}" y2="${loadBoxY}" stroke-width="1.8" />
      <line x1="${hook2Px}" y1="${dropY + 3}" x2="${hook2Px}" y2="${loadBoxY}" stroke-width="1.8" />
      <circle cx="${hook1Px}" cy="${dropY + 8}" r="3.5" fill="#fff" stroke-width="1.3" />
      <circle cx="${hook2Px}" cy="${dropY + 8}" r="3.5" fill="#fff" stroke-width="1.3" />

      <!-- Dual-Hook Payload Box -->
      <rect x="${centerPx - boxWidth / 2}" y="${loadBoxY}" width="${boxWidth}" height="42" stroke-width="1.8" />
      <text x="${centerPx}" y="${loadBoxY + 16}" font-size="9.5" font-weight="bold" text-anchor="middle">2× ${fmt(d.P_dyn_kN / 2, 1)} kN (P_dyn = ${fmt(d.P_dyn_kN, 1)} kN)</text>
      <text x="${centerPx}" y="${loadBoxY + 32}" font-size="10.5" font-weight="bold" text-anchor="middle">${fmtInt(d.P_kg)} kg ${t('svg_total_suffix')}</text>

      <!-- Dual Load Vector Arrows -->
      <line x1="${hook1Px}" y1="${loadBoxY + 44}" x2="${hook1Px}" y2="${loadBoxY + 68}" stroke-width="2.2" marker-end="url(#arrowDownAmber)" />
      <line x1="${hook2Px}" y1="${loadBoxY + 44}" x2="${hook2Px}" y2="${loadBoxY + 68}" stroke-width="2.2" marker-end="url(#arrowDownAmber)" />
    `;
  }

  // 5. Crown Reaction Force Vectors (F_crown,A and F_crown,B)
  const maxCrown = Math.max(d.F_crown_A_kN, d.F_crown_B_kN, 1);
  const lenA = Math.min(54, Math.max(24, (d.F_crown_A_kN / maxCrown) * 50));
  const lenB = Math.min(54, Math.max(24, (d.F_crown_B_kN / maxCrown) * 50));

  html += `
    <line x1="${leftX - 38}" y1="${beamY + beamHeight + lenA}" x2="${leftX - 38}" y2="${beamY + beamHeight + 4}" stroke-width="2.5" marker-end="url(#arrowUpSky)" />
    <text x="${leftX - 44}" y="${beamY + beamHeight + lenA / 2 + 4}" font-size="9.5" font-weight="bold" text-anchor="end">F_crown,A: ${fmt(d.F_crown_A_kN, 1)} kN</text>

    <line x1="${rightX + 38}" y1="${beamY + beamHeight + lenB}" x2="${rightX + 38}" y2="${beamY + beamHeight + 4}" stroke-width="2.5" marker-end="url(#arrowUpIndigo)" />
    <text x="${rightX + 44}" y="${beamY + beamHeight + lenB / 2 + 4}" font-size="9.5" font-weight="bold" text-anchor="start">F_crown,B: ${fmt(d.F_crown_B_kN, 1)} kN</text>
  `;

  // 6. Title Block with Secondary Note on Longitudinal 45° Dispersion
  const dispSubtitle = d.supportMode === 'hardwood' ? t('svg_drawing_subtitle_hardwood') : t('svg_drawing_subtitle_slab');
  const titleBlockLongText = d.supportMode === 'hardwood'
    ? `2ND: L_eff = ${Math.round(d.L_eff_mm)} mm (h_slab = ${Math.round(d.h_slab_mm)} mm, 45°)`
    : `2ND: L_eff = ${Math.round(d.L_eff_mm)} mm (h_track = ${Math.round(d.h_track_mm)} mm, 45°)`;

  html += `
    <line x1="20" y1="395" x2="780" y2="395" stroke="#64748b" stroke-width="1" />
    <text x="24" y="413" font-size="9" font-weight="bold">HGA / PORTAL FRONTAL ELEVATION</text>
    <text x="24" y="429" font-size="8">${dispSubtitle}</text>
    <line x1="445" y1="395" x2="445" y2="440" stroke="#94a3b8" stroke-width="1" />
    <text x="455" y="413" font-size="8" font-weight="bold">FRONTAL: W_eff = ${Math.round(d.W_eff_mm)} mm (0°)</text>
    <text x="455" y="429" font-size="8">${titleBlockLongText}</text>
    <line x1="705" y1="395" x2="705" y2="440" stroke="#94a3b8" stroke-width="1" />
    <text x="715" y="413" font-size="8" font-weight="bold">REV 3.2</text>
    <text x="715" y="429" font-size="8">GA-01</text>
  `;
  g.innerHTML = html;

  const summaryEl = document.getElementById('svgDimensionSummary');
  if (summaryEl) {
    if (d.supportMode === 'hardwood') {
      summaryEl.textContent = currentLang === 'de'
        ? `Frontal: W_eff = ${Math.round(d.W_eff_mm)} mm (0° Quer)  •  Längs: L_eff = ${Math.round(d.L_eff_mm)} mm ab Holz–Decke (h_slab = ${Math.round(d.h_slab_mm)} mm, 45°)`
        : `Frontal: W_eff = ${Math.round(d.W_eff_mm)} mm (0° spread)  •  Longitudinal: L_eff = ${Math.round(d.L_eff_mm)} mm timber–slab (h_slab = ${Math.round(d.h_slab_mm)} mm, 45°)`;
    } else {
      summaryEl.textContent = currentLang === 'de'
        ? `Frontal: W_eff = ${Math.round(d.W_eff_mm)} mm (0° Quer)  •  Längs: L_eff = ${Math.round(d.L_eff_mm)} mm durch ${Math.round(d.h_track_mm)} mm Schiene (45°)`
        : `Frontal: W_eff = ${Math.round(d.W_eff_mm)} mm (0° spread)  •  Longitudinal: L_eff = ${Math.round(d.L_eff_mm)} mm through ${Math.round(d.h_track_mm)} mm track (45°)`;
    }
  }
}

// 2) DRAW SIMPLIFIED HYDRAULIC GANTRY TOWER SCHEMATIC (SECTION 2 — FRONTAL VIEW PER REFERENCE DRAWING, READ-ONLY)
function drawGantryUnitSchematic(d) {
  const g = document.getElementById('gantryUnitLayer');
  if (!g) return;
  g.innerHTML = '';

  const badgeEl = document.getElementById('gantryUnitBadge');
  if (badgeEl) {
    badgeEl.textContent = `${d.gantryObj.model.toUpperCase()} • ${d.stageLabel.toUpperCase()} (${Math.round(d.stageHeight)} mm)`;
  }
  const summaryEl = document.getElementById('gantryUnitDimensionSummary');
  if (summaryEl) {
    summaryEl.textContent = currentLang === 'de'
      ? `Frontal (Primär): W_base = ${Math.round(d.W_base_mm)} mm  •  Sekundär (Tiefe): L_base = ${Math.round(d.L_base_mm)} mm`
      : `Frontal Primary: W_base = ${Math.round(d.W_base_mm)} mm  •  Secondary (Into Page): L_base = ${Math.round(d.L_base_mm)} mm`;
  }

  // Frontal Gantry Tower coordinates inside viewBox="0 0 460 320"
  const cx = 148;
  const wheelBotY = 258;
  const baseW = clampSchematicValue(d.W_base_mm * 0.068, 72, 132);

  // Total gantry pin height H_stage scaled cleanly
  const totalGantryH = clampSchematicValue(148 + d.currentStage * 16 + (d.stageHeight - 3000) * 0.006, 148, 200);
  const crownTopY = wheelBotY - totalGantryH;

  // Dashed Header Beam sitting on top of the Gantry Tower (extending right as in the reference drawing)
  const beamH = 30;
  const beamTopY = crownTopY - beamH;
  const beamLeftX = cx - 42;
  const beamRightX = cx + 115;

  // Sub-coordinates following reference drawing (media_1794674920219_8768e001.png)
  const swivelW = 32;
  const swivelH = 6;
  const clevisTopY = crownTopY + swivelH;
  const crownW = 72;
  const crownH = 19;
  const cylTopY = clevisTopY + crownH;

  const wheelH = 15;
  const shoeBeamH = 11;
  const housingBotY = wheelBotY - wheelH - shoeBeamH;
  const housingH = 74;
  const housingTopY = housingBotY - housingH;
  const housingW = 78;

  // Twin cylinders (left & right) with stepped telescopic collars
  const cylOffset = 19;
  const pinL = cx - cylOffset;
  const pinR = cx + cylOffset;
  const barrelW = 26;
  const cylSpanH = Math.max(26, housingTopY - cylTopY);
  const step1H = Math.min(11, cylSpanH * 0.18);
  const step2H = Math.min(13, cylSpanH * 0.22);
  const barrelTopY = cylTopY + step1H + step2H;
  const barrelH = Math.max(14, housingTopY - barrelTopY);

  // 4 Bogie wheels at bottom of gantry tower
  const wheelW = 11;
  const outerWOff = baseW / 2 - wheelW / 2 - 1.5;
  const innerWOff = Math.max(16, baseW * 0.27);

  function towerTag(x, y, w, h, title, valLine, anchorX, anchorY) {
    return `
      <g class="cad-callout">
        <line x1="${anchorX}" y1="${anchorY}" x2="${x}" y2="${y + h / 2}" stroke-width="1" stroke-dasharray="3,2" />
        <circle cx="${anchorX}" cy="${anchorY}" r="2" class="cad-solid" />
        <rect class="cad-callout-box" x="${x}" y="${y}" width="${w}" height="${h}" stroke-width="1.1" />
        <text x="${x + 5}" y="${y + 10}" font-size="7.5" font-weight="bold">${title}</text>
        <text x="${x + 5}" y="${y + 20}" font-size="8" font-weight="bold">${valLine}</text>
      </g>
    `;
  }

  g.innerHTML = `
    <!-- 1. DASHED HEADER LIFTING BEAM (Top, extending right per reference drawing) -->
    <rect x="${beamLeftX}" y="${beamTopY}" width="${beamRightX - beamLeftX}" height="${beamH}" stroke-width="2" stroke-dasharray="8,4" />
    <line x1="${beamLeftX}" y1="${beamTopY + 4.5}" x2="${beamRightX}" y2="${beamTopY + 4.5}" stroke-width="1.3" stroke-dasharray="8,4" />
    <line x1="${beamLeftX}" y1="${beamTopY + beamH - 4.5}" x2="${beamRightX}" y2="${beamTopY + beamH - 4.5}" stroke-width="1.3" stroke-dasharray="8,4" />

    <!-- 2. TOP SWIVEL & SIDE-SHIFT PAD (W_shift) -->
    <rect x="${cx - swivelW / 2}" y="${crownTopY}" width="${swivelW}" height="${swivelH}" stroke-width="1.7" />
    <line x1="${cx - swivelW / 2 + 4}" y1="${crownTopY + 3}" x2="${cx + swivelW / 2 - 4}" y2="${crownTopY + 3}" stroke-width="1.1" />

    <!-- 3. CYLINDER TOP PLATE & TWIN CLEVIS PIN EYES (part of unitWt) -->
    <rect x="${cx - crownW / 2}" y="${clevisTopY}" width="${crownW}" height="4" stroke-width="1.7" />
    <rect x="${pinL - 12}" y="${clevisTopY + 4}" width="24" height="${crownH - 4}" stroke-width="1.7" />
    <rect x="${pinR - 12}" y="${clevisTopY + 4}" width="24" height="${crownH - 4}" stroke-width="1.7" />
    <rect x="${cx - 6}" y="${clevisTopY + 4}" width="12" height="${crownH - 5.5}" stroke-width="1.4" />
    <circle cx="${pinL}" cy="${clevisTopY + 11.5}" r="4.5" fill="#fff" stroke-width="1.7" />
    <circle cx="${pinL}" cy="${clevisTopY + 11.5}" r="1.8" fill="#fff" stroke-width="1.1" />
    <circle cx="${pinR}" cy="${clevisTopY + 11.5}" r="4.5" fill="#fff" stroke-width="1.7" />
    <circle cx="${pinR}" cy="${clevisTopY + 11.5}" r="1.8" fill="#fff" stroke-width="1.1" />

    <!-- 4. TWIN STEPPED TELESCOPIC HYDRAULIC CYLINDERS (Left & Right) -->
    ${[pinL, pinR].map(px => `
      <rect x="${px - 8.5}" y="${cylTopY}" width="17" height="${step1H * 0.55}" stroke-width="1.5" />
      <rect x="${px - 10}" y="${cylTopY + step1H * 0.55}" width="20" height="${step1H * 0.45}" stroke-width="1.5" />
      <rect x="${px - 11.5}" y="${cylTopY + step1H}" width="23" height="${step2H}" stroke-width="1.6" />
      <line x1="${px - 11.5}" y1="${cylTopY + step1H + step2H * 0.45}" x2="${px + 11.5}" y2="${cylTopY + step1H + step2H * 0.45}" stroke-width="1.2" />
      <rect x="${px - barrelW / 2}" y="${barrelTopY}" width="${barrelW}" height="${barrelH}" stroke-width="1.9" />
      <line x1="${px - barrelW / 2}" y1="${barrelTopY + 3.5}" x2="${px + barrelW / 2}" y2="${barrelTopY + 3.5}" stroke-width="1.2" />
      <line x1="${px - barrelW / 2}" y1="${housingTopY - 6.5}" x2="${px + barrelW / 2}" y2="${housingTopY - 6.5}" stroke-width="1.2" />
    `).join('')}

    <!-- 5. LOWER GANTRY TOWER HOUSING (W_tower) WITH CONTROL BOX & TWIN SLOTS -->
    <rect x="${cx - (housingW + 6) / 2}" y="${housingTopY - 4.5}" width="${housingW + 6}" height="4.5" stroke-width="1.7" />
    <rect x="${cx - housingW / 2 - 3.5}" y="${housingTopY}" width="3.5" height="13" stroke-width="1.5" />
    <rect x="${cx + housingW / 2}" y="${housingTopY}" width="3.5" height="13" stroke-width="1.5" />
    <rect x="${cx - housingW / 2}" y="${housingTopY}" width="${housingW}" height="${housingH}" stroke-width="2.0" />
    <rect x="${cx - 17.5}" y="${housingTopY + 14}" width="35" height="28" stroke-width="1.7" />
    <rect class="cad-solid" x="${cx - 6}" y="${housingTopY + 54}" width="3" height="8.5" />
    <rect class="cad-solid" x="${cx + 3}" y="${housingTopY + 54}" width="3" height="8.5" />

    <!-- 6. WHEELED BASE SHOE / BOGIE ASSEMBLY (W_base — Frontal Primary, No Track) -->
    <rect x="${cx - baseW / 2}" y="${housingBotY}" width="${baseW}" height="${shoeBeamH}" stroke-width="1.9" />
    <rect x="${cx - baseW / 2}" y="${housingBotY - 9}" width="10" height="9" stroke-width="1.6" />
    <rect x="${cx + baseW / 2 - 10}" y="${housingBotY - 9}" width="10" height="9" stroke-width="1.6" />
    <rect x="${cx - innerWOff}" y="${wheelBotY - wheelH + 3}" width="${innerWOff * 2}" height="5.5" stroke-width="1.5" />
    <line x1="${cx}" y1="${housingBotY + shoeBeamH}" x2="${cx}" y2="${wheelBotY - 3}" stroke-width="1.6" />
    <rect x="${cx - outerWOff - wheelW / 2}" y="${wheelBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.8" />
    <rect x="${cx - innerWOff - wheelW / 2}" y="${wheelBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.8" />
    <rect x="${cx + innerWOff - wheelW / 2}" y="${wheelBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.8" />
    <rect x="${cx + outerWOff - wheelW / 2}" y="${wheelBotY - wheelH}" width="${wheelW}" height="${wheelH}" stroke-width="1.8" />

    <!-- 7. LEFT VERTICAL DIMENSION LINE (Pin Height H_stage, matching "3016" in reference drawing) -->
    <line x1="48" y1="${crownTopY}" x2="${beamLeftX - 3}" y2="${crownTopY}" stroke-width="1.4" />
    <line x1="48" y1="${wheelBotY - wheelH / 2}" x2="${cx - baseW / 2 - 3}" y2="${wheelBotY - wheelH / 2}" stroke-width="1.4" />
    <line x1="58" y1="${crownTopY}" x2="58" y2="${wheelBotY - wheelH / 2}" stroke-width="1.7" />
    <polygon class="cad-arrow" points="58,${crownTopY} 55,${crownTopY + 11} 61,${crownTopY + 11}" />
    <polygon class="cad-arrow" points="58,${wheelBotY - wheelH / 2} 55,${wheelBotY - wheelH / 2 - 11} 61,${wheelBotY - wheelH / 2 - 11}" />
    <text x="48" y="${(crownTopY + wheelBotY - wheelH / 2) / 2}" font-size="12.5" font-weight="bold" text-anchor="middle" transform="rotate(-90 48 ${(crownTopY + wheelBotY - wheelH / 2) / 2})">${Math.round(d.stageHeight)}</text>

    <!-- 8. BOTTOM FRONTAL DIMENSION LINE (Shoe Width W_base, matching "1194" in reference drawing) -->
    <line x1="${cx - baseW / 2}" y1="${wheelBotY}" x2="${cx - baseW / 2}" y2="${wheelBotY + 38}" stroke-width="1.4" />
    <line x1="${cx + baseW / 2}" y1="${wheelBotY}" x2="${cx + baseW / 2}" y2="${wheelBotY + 38}" stroke-width="1.4" />
    <text x="${cx}" y="${wheelBotY + 15}" font-size="9.5" font-weight="bold" text-anchor="middle">${t('svg_w_base_frontal')}</text>
    <text x="${cx}" y="${wheelBotY + 27}" font-size="11.5" font-weight="bold" text-anchor="middle">${Math.round(d.W_base_mm)}</text>
    <line x1="${cx - baseW / 2}" y1="${wheelBotY + 32}" x2="${cx + baseW / 2}" y2="${wheelBotY + 32}" stroke-width="1.6" />
    <polygon class="cad-arrow" points="${cx - baseW / 2},${wheelBotY + 32} ${cx - baseW / 2 + 10},${wheelBotY + 29} ${cx - baseW / 2 + 10},${wheelBotY + 35}" />
    <polygon class="cad-arrow" points="${cx + baseW / 2},${wheelBotY + 32} ${cx + baseW / 2 - 10},${wheelBotY + 29} ${cx + baseW / 2 - 10},${wheelBotY + 35}" />

    <!-- 9. SECTION 2 READ-ONLY PARAMETER CALLOUTS (Right Side of Tower) -->
    ${towerTag(274, 58, 170, 26, t('svg_tag_shift'), `${fmtInt(d.m_shift_kg)} kg ${t('svg_per_tower')}`, cx + swivelW / 2, crownTopY + swivelH / 2)}
    ${towerTag(274, 98, 170, 26, t('svg_tag_stage'), `${d.stageLabel}: H = ${Math.round(d.stageHeight)} mm`, pinR + barrelW / 2, barrelTopY + barrelH * 0.4)}
    ${towerTag(274, 138, 170, 26, t('svg_tag_tower'), `${d.gantryObj.model} • ${fmtInt(d.m_tower_kg)} kg`, cx + housingW / 2, housingTopY + housingH * 0.5)}
    ${towerTag(274, 178, 170, 26, t('svg_tag_w_base'), `W_base = ${Math.round(d.W_base_mm)} mm`, cx + baseW / 2, housingBotY + shoeBeamH / 2)}
    <g class="cad-callout">
      <rect class="cad-callout-box" x="274" y="218" width="170" height="29" stroke-width="1.1" stroke-dasharray="4,2" />
      <text x="279" y="229" font-size="7.5" font-weight="bold">${t('svg_tag_l_base')}</text>
      <text x="279" y="241" font-size="8" font-weight="bold">L_base = ${Math.round(d.L_base_mm)} mm ${t('svg_side_view_note')}</text>
    </g>
  `;
}

// 3) DRAW SEPARATED GANTRY TRACK & 45° DISPERSION SCHEMATIC (SECTION 3 — FRONTAL 0° + LONGITUDINAL 45°, READ-ONLY)
function drawTrackUnitSchematic(d) {
  const g = document.getElementById('trackUnitLayer');
  if (!g) return;
  g.innerHTML = '';

  const badgeEl = document.getElementById('trackUnitBadge');
  if (badgeEl) {
    badgeEl.textContent = `A_eff = ${d.bearingFootprint.valid ? fmt(d.A_eff_m2, 3) + ' m²' : '—'}`;
  }
  const summaryEl = document.getElementById('trackUnitDimensionSummary');
  if (summaryEl) {
    if (d.supportMode === 'hardwood') {
      summaryEl.textContent = currentLang === 'de'
        ? `W_eff = ${Math.round(d.W_eff_mm)} mm (0°)  •  L_eff = ${d.bearingFootprint.valid ? Math.round(d.L_eff_mm) + ' mm' : '—'} ab Holz–Decke (h_slab = ${Math.round(d.h_slab_mm)} mm, 45°)`
        : `W_eff = ${Math.round(d.W_eff_mm)} mm (0°)  •  L_eff = ${d.bearingFootprint.valid ? Math.round(d.L_eff_mm) + ' mm' : '—'} timber–slab (h_slab = ${Math.round(d.h_slab_mm)} mm, 45°)`;
    } else {
      summaryEl.textContent = currentLang === 'de'
        ? `W_eff = ${Math.round(d.W_eff_mm)} mm (0°)  •  L_eff = ${Math.round(d.L_eff_mm)} mm durch ${Math.round(d.h_track_mm)} mm Schiene (45°)`
        : `W_eff = ${Math.round(d.W_eff_mm)} mm (0°)  •  L_eff = ${Math.round(d.L_eff_mm)} mm through ${Math.round(d.h_track_mm)} mm track (45°)`;
    }
  }

  // Left Half: Frontal Track Cross-Section (0° Lateral Dispersion)
  const frontCx = 112;
  const groundY = 128;
  const slabHeightPx = clampSchematicValue(d.h_slab_mm * 0.2, 32, 42);
  const slabBottomY = groundY + slabHeightPx;
  const trackH = clampSchematicValue(d.h_track_mm * 0.08, 18, 44);
  const frontWoodHeightPx = d.supportMode === 'hardwood'
    ? clampSchematicValue(d.blockHeight_mm * 0.08, 6, 28)
    : 0;
  const trackBottomY = groundY - frontWoodHeightPx;
  const trackTopY = trackBottomY - trackH;
  const trackW = clampSchematicValue(d.W_track_mm * 0.075, 64, 142);
  const baseW = clampSchematicValue(d.W_base_mm * 0.075, 64, 142);
  const contactW = clampSchematicValue(d.W_eff_mm * 0.075, 32, 142);

  // Right Half: Longitudinal Side View along Rail (45° Longitudinal Dispersion)
  const sideCx = 335;
  const sideShoeHalf = clampSchematicValue(d.L_base_mm * 0.028, 34, 58);
  const sideScale = (sideShoeHalf * 2) / Math.max(d.L_base_mm, 1);
  const sideWoodHeightPx = d.supportMode === 'hardwood'
    ? clampSchematicValue(d.blockHeight_mm * 0.08, 6, 28)
    : 0;
  const sideTrackBottomY = groundY - sideWoodHeightPx;
  const sideTrackTopY = sideTrackBottomY - trackH;
  const maxRightMargin = Math.max(10, 434 - (sideCx + sideShoeHalf));

  let sideDispersionMarkup = '';
  let spreadLeft = sideCx - sideShoeHalf;
  let spreadRight = sideCx + sideShoeHalf;
  let spreadTopY = sideTrackTopY;
  let spreadBottomY = groundY;

  if (d.supportMode === 'hardwood') {
    const sideSpread = clampSchematicValue(d.h_slab_mm * sideScale, 8, maxRightMargin);
    const sideBlocks = d.bearingFootprint.blocks.map(block => ({
      left: clampSchematicValue(sideCx + block.start_mm * sideScale, 238, 432),
      right: clampSchematicValue(sideCx + block.end_mm * sideScale, 238, 432)
    }));
    const expandedBlocks = sideBlocks.map(block => ({
      left: block.left - sideSpread,
      right: block.right + sideSpread
    }));
    spreadLeft = Math.min(...expandedBlocks.map(block => block.left));
    spreadRight = Math.max(...expandedBlocks.map(block => block.right));
    spreadTopY = groundY;
    spreadBottomY = slabBottomY;

    sideDispersionMarkup = `
      ${sideBlocks.map(block => `<rect class="cad-timber" x="${block.left}" y="${groundY - sideWoodHeightPx}" width="${Math.max(2, block.right - block.left)}" height="${sideWoodHeightPx}" />`).join('')}
      ${expandedBlocks.map((block, index) => {
        const source = sideBlocks[index];
        return `
          <polygon class="cad-spread-zone" points="${source.left},${groundY} ${source.right},${groundY} ${block.right},${slabBottomY} ${block.left},${slabBottomY}" />
          <line x1="${source.left}" y1="${groundY}" x2="${block.left}" y2="${slabBottomY}" stroke="#155e9a" stroke-width="1.3" />
          <line x1="${source.right}" y1="${groundY}" x2="${block.right}" y2="${slabBottomY}" stroke="#155e9a" stroke-width="1.3" />
        `;
      }).join('')}
      <text x="${spreadLeft - 2}" y="${slabBottomY - 3}" font-size="7.5" font-weight="bold" text-anchor="end">45°</text>
      <text x="${spreadRight + 2}" y="${slabBottomY - 3}" font-size="7.5" font-weight="bold" text-anchor="start">45°</text>
      <text x="442" y="${groundY + slabHeightPx / 2 + 2}" font-size="7" text-anchor="end">h_slab=${Math.round(d.h_slab_mm)}</text>
    `;
  } else {
    const sideTrackSpread = clampSchematicValue(d.h_track_mm * sideScale, 10, maxRightMargin);
    spreadLeft = sideCx - sideShoeHalf - sideTrackSpread;
    spreadRight = sideCx + sideShoeHalf + sideTrackSpread;
    spreadTopY = sideTrackTopY;
    spreadBottomY = groundY;

    sideDispersionMarkup = `
      <polygon class="cad-spread-zone" points="${sideCx - sideShoeHalf},${sideTrackTopY} ${sideCx + sideShoeHalf},${sideTrackTopY} ${spreadRight},${groundY} ${spreadLeft},${groundY}" />
      <line x1="${sideCx - sideShoeHalf}" y1="${sideTrackTopY}" x2="${spreadLeft}" y2="${groundY}" stroke="#155e9a" stroke-width="1.3" />
      <line x1="${sideCx + sideShoeHalf}" y1="${sideTrackTopY}" x2="${spreadRight}" y2="${groundY}" stroke="#155e9a" stroke-width="1.3" />
      <text x="${spreadLeft - 2}" y="${groundY - 3}" font-size="7.5" font-weight="bold" text-anchor="end">45°</text>
      <text x="${spreadRight + 2}" y="${groundY - 3}" font-size="7.5" font-weight="bold" text-anchor="start">45°</text>
      <text x="434" y="${sideTrackTopY + trackH / 2 + 2}" font-size="7" text-anchor="end">h_track=${Math.round(d.h_track_mm)}</text>
    `;
  }

  const maxQText = d.bearingFootprint.valid ? `${fmt(Math.max(d.q_A_kNm2, d.q_B_kNm2), 1)}` : '—';
  const leftCalloutDetail = d.supportMode === 'hardwood'
    ? `h_track=${Math.round(d.h_track_mm)}  h_slab=${Math.round(d.h_slab_mm)} mm`
    : `h_track=${Math.round(d.h_track_mm)} mm  ·  W_track=${Math.round(d.W_track_mm)} mm`;

  g.innerHTML = `
    <!-- Center Divider -->
    <line x1="218" y1="14" x2="218" y2="258" stroke-width="1" stroke-dasharray="4,3" />

    <!-- ================= LEFT: FRONTAL TRACK CROSS-SECTION (0° LATERAL) ================= -->
    <text x="${frontCx}" y="24" font-size="8.5" font-weight="bold" text-anchor="middle">${t('svg_track_front_view')}</text>
    <rect class="cad-concrete" x="16" y="${groundY}" width="192" height="${slabHeightPx}" />
    <line x1="16" y1="${groundY}" x2="208" y2="${groundY}" stroke-width="1.8" />

    <!-- Ghost Gantry Bogie Rollers sitting on Track Top -->
    <rect x="${frontCx - baseW / 2}" y="${trackTopY - 12}" width="${baseW}" height="5" stroke-width="1.2" stroke-dasharray="3,2" />
    <rect x="${frontCx - baseW * 0.42}" y="${trackTopY - 7}" width="9" height="7" stroke-width="1.3" />
    <rect x="${frontCx - baseW * 0.18}" y="${trackTopY - 7}" width="9" height="7" stroke-width="1.3" />
    <rect x="${frontCx + baseW * 0.18 - 9}" y="${trackTopY - 7}" width="9" height="7" stroke-width="1.3" />
    <rect x="${frontCx + baseW * 0.42 - 9}" y="${trackTopY - 7}" width="9" height="7" stroke-width="1.3" />

    <!-- Track Profile Cross-Section (W_track × h_track, 0° Vertical Edges) -->
    <rect class="cad-track" x="${frontCx - trackW / 2}" y="${trackTopY}" width="${trackW}" height="${trackH}" stroke-width="1.9" />
    <line x1="${frontCx - trackW / 2}" y1="${trackTopY + 3.5}" x2="${frontCx + trackW / 2}" y2="${trackTopY + 3.5}" stroke-width="1.2" />
    <line x1="${frontCx - trackW / 2}" y1="${trackBottomY - 3.5}" x2="${frontCx + trackW / 2}" y2="${trackBottomY - 3.5}" stroke-width="1.2" />
    <line x1="${frontCx - trackW * 0.24}" y1="${trackTopY}" x2="${frontCx - trackW * 0.24}" y2="${trackBottomY}" stroke-width="1.3" />
    <line x1="${frontCx}" y1="${trackTopY}" x2="${frontCx}" y2="${trackBottomY}" stroke-width="1.3" />
    <line x1="${frontCx + trackW * 0.24}" y1="${trackTopY}" x2="${frontCx + trackW * 0.24}" y2="${trackBottomY}" stroke-width="1.3" />
    ${d.supportMode === 'hardwood' ? `<rect class="cad-timber" x="${frontCx - contactW / 2}" y="${trackBottomY}" width="${contactW}" height="${frontWoodHeightPx}" />` : ''}
    <line class="cad-contact-line" x1="${frontCx - contactW / 2}" y1="${groundY}" x2="${frontCx + contactW / 2}" y2="${groundY}" />
    <text x="${frontCx - contactW / 2 - 4}" y="${groundY - 4}" font-size="7.5" font-weight="bold" text-anchor="end">0°</text>
    <text x="${frontCx + contactW / 2 + 4}" y="${groundY - 4}" font-size="7.5" font-weight="bold" text-anchor="start">0°</text>

    <!-- Frontal Dimension: zero transverse spread from the slab contact width -->
    <line x1="${frontCx - contactW / 2}" y1="${groundY}" x2="${frontCx - contactW / 2}" y2="${slabBottomY + 30}" stroke-width="1.3" />
    <line x1="${frontCx + contactW / 2}" y1="${groundY}" x2="${frontCx + contactW / 2}" y2="${slabBottomY + 30}" stroke-width="1.3" />
    <line x1="${frontCx - contactW / 2}" y1="${slabBottomY + 24}" x2="${frontCx + contactW / 2}" y2="${slabBottomY + 24}" stroke-width="1.5" />
    <polygon class="cad-arrow" points="${frontCx - contactW / 2},${slabBottomY + 24} ${frontCx - contactW / 2 + 9},${slabBottomY + 21.5} ${frontCx - contactW / 2 + 9},${slabBottomY + 26.5}" />
    <polygon class="cad-arrow" points="${frontCx + contactW / 2},${slabBottomY + 24} ${frontCx + contactW / 2 - 9},${slabBottomY + 21.5} ${frontCx + contactW / 2 - 9},${slabBottomY + 26.5}" />
    <text x="${frontCx}" y="${slabBottomY + 20}" font-size="8.5" font-weight="bold" text-anchor="middle">W_eff = ${Math.round(d.W_eff_mm)} mm</text>
    ${d.supportMode === 'hardwood' ? `<text x="${frontCx}" y="${slabBottomY + 34}" font-size="7.5" font-weight="bold" text-anchor="middle">${t('svg_hardwood_length')} = ${Math.round(d.blockLength_mm)} mm (&gt; ${Math.round(d.W_track_mm)} mm)</text>` : ''}

    <!-- Read-Only Track Summary Box -->
    <g class="cad-callout">
      <rect class="cad-callout-box" x="16" y="232" width="192" height="24" stroke-width="1.1" />
      <text x="22" y="242" font-size="7.5" font-weight="bold">${t('svg_track_callout_title')}</text>
      <text x="22" y="252" font-size="8" font-weight="bold">${leftCalloutDetail}</text>
    </g>

    <!-- ================= RIGHT: LONGITUDINAL SIDE VIEW (45° DISPERSION) ================= -->
    <text x="${sideCx}" y="24" font-size="8.5" font-weight="bold" text-anchor="middle">${t('svg_track_side_view')}</text>
    ${d.supportMode === 'hardwood' ? `<text x="${sideCx}" y="36" font-size="7.5" font-weight="bold" text-anchor="middle">${t('svg_hardwood_profile')}: ${Math.round(d.blockWidth_mm)} × ${Math.round(d.blockHeight_mm)} mm</text>` : ''}
    <rect class="cad-concrete" x="228" y="${groundY}" width="216" height="${slabHeightPx}" />
    <line x1="228" y1="${groundY}" x2="444" y2="${groundY}" stroke-width="1.8" />
    <line x1="228" y1="${slabBottomY}" x2="444" y2="${slabBottomY}" stroke-width="1.4" />

    <!-- Gantry Base Shoe Length (L_base) sitting on Track Rail -->
    <rect x="${sideCx - sideShoeHalf}" y="${sideTrackTopY - 12}" width="${sideShoeHalf * 2}" height="12" stroke-width="1.7" />
    <line x1="${sideCx - sideShoeHalf}" y1="${sideTrackTopY - 20}" x2="${sideCx + sideShoeHalf}" y2="${sideTrackTopY - 20}" stroke-width="1.4" />
    <line x1="${sideCx - sideShoeHalf}" y1="${sideTrackTopY - 24}" x2="${sideCx - sideShoeHalf}" y2="${sideTrackTopY - 14}" stroke-width="1.2" />
    <line x1="${sideCx + sideShoeHalf}" y1="${sideTrackTopY - 24}" x2="${sideCx + sideShoeHalf}" y2="${sideTrackTopY - 14}" stroke-width="1.2" />
    <text x="${sideCx}" y="${sideTrackTopY - 24}" font-size="8" font-weight="bold" text-anchor="middle">L_base = ${Math.round(d.L_base_mm)} mm</text>

    <!-- Steel Track Rail + Dual 45° Longitudinal Dispersion -->
    <rect class="cad-track" x="234" y="${sideTrackTopY}" width="202" height="${trackH}" stroke-width="1.5" />
    ${sideDispersionMarkup}

    <!-- Effective Bearing Length & Area Dimension -->
    <line x1="${spreadLeft}" y1="${slabBottomY + 8}" x2="${spreadRight}" y2="${slabBottomY + 8}" stroke-width="1.5" />
    <line x1="${spreadLeft}" y1="${spreadBottomY}" x2="${spreadLeft}" y2="${slabBottomY + 12}" stroke-width="1.2" stroke-dasharray="${d.supportMode === 'slab' ? '3,2' : 'none'}" />
    <line x1="${spreadRight}" y1="${spreadBottomY}" x2="${spreadRight}" y2="${slabBottomY + 12}" stroke-width="1.2" stroke-dasharray="${d.supportMode === 'slab' ? '3,2' : 'none'}" />
    <text x="${sideCx}" y="${slabBottomY + 22}" font-size="7.5" font-weight="bold" text-anchor="middle">L_eff=${d.bearingFootprint.valid ? Math.round(d.L_eff_mm) + ' mm' : '—'} · A_eff=${d.bearingFootprint.valid ? fmt(d.A_eff_m2, 3) + ' m²' : '—'}</text>

    <!-- Read-Only Floor Bearing Summary Box -->
    <g class="cad-callout">
      <rect class="cad-callout-box" x="228" y="232" width="216" height="24" stroke-width="1.1" />
      <text x="234" y="242" font-size="7.5" font-weight="bold">${t('svg_floor_callout_title')}</text>
      <text x="234" y="252" font-size="8" font-weight="bold">q_max=${maxQText} ≤ ${Math.round(d.allowable_q)} kN/m²</text>
    </g>
  `;
}

// SECTION 2.3: RENDER BMD & SFD AT 60 EQUIDISTANT INTERVALS USING HEAVISIDE STEP FUNCTION
function renderChart60Intervals(L_m, R_crown_A_kN, w_beam_kN_per_m, pointLoads) {
  const ctx = document.getElementById('internalForceChart').getContext('2d');
  const numIntervals = 60;
  const labels = [];
  const bmdValues = [];
  const sfdValues = [];

  let M_max = 0;
  let V_max = 0;

  function evalMandV(x) {
    let V = R_crown_A_kN - (w_beam_kN_per_m * x);
    let M = (R_crown_A_kN * x) - (0.5 * w_beam_kN_per_m * x * x);

    for (const ld of pointLoads) {
      const H = heaviside(x, ld.x_m);
      V -= ld.P_kN * H;
      M -= ld.P_kN * (x - ld.x_m) * H;
    }
    return { M: Math.max(0, M), V };
  }

  for (let i = 0; i <= numIntervals; i++) {
    const curX = (i / numIntervals) * L_m;
    labels.push(fmt(curX * 1000, 0) + ' mm');

    const res = evalMandV(curX);
    if (res.M > M_max) M_max = res.M;
    if (Math.abs(res.V) > V_max) V_max = Math.abs(res.V);

    bmdValues.push(Math.round(res.M * 10) / 10);
    sfdValues.push(Math.round(res.V * 10) / 10);
  }

  for (const ld of pointLoads) {
    const resJustLeft = evalMandV(Math.max(0, ld.x_m - 1e-6));
    const resAt = evalMandV(ld.x_m);
    M_max = Math.max(M_max, resAt.M);
    V_max = Math.max(V_max, Math.abs(resJustLeft.V), Math.abs(resAt.V));
  }

  if (chartInstance) chartInstance.destroy();

  const isBmd = currentDiagramTab === 'bmd';
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: isBmd ? t('chart_lbl_bmd') : t('chart_lbl_sfd'),
        data: isBmd ? bmdValues : sfdValues,
        borderColor: isBmd ? '#38bdf8' : '#fbbf24',
        backgroundColor: isBmd ? 'rgba(56, 189, 248, 0.16)' : 'rgba(251, 191, 36, 0.16)',
        borderWidth: 2,
        fill: true,
        pointRadius: 1.5,
        pointHoverRadius: 4,
        tension: isBmd ? 0.15 : 0.0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: { color: '#94a3b8', font: { family: 'monospace', size: 10 } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.parsed.y} ${isBmd ? 'kNm' : 'kN'}`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#64748b', maxTicksLimit: 11, font: { family: 'monospace', size: 9 } },
          grid: { color: 'rgba(51, 65, 85, 0.3)' }
        },
        y: {
          ticks: { color: '#94a3b8', font: { family: 'monospace', size: 9 } },
          grid: { color: 'rgba(51, 65, 85, 0.5)' }
        }
      }
    }
  });

  return { M_max, V_max };
}

// INITIALIZATION ON WINDOW LOAD
window.onload = function () {
  initDropdowns();
  onSelectBeam();
  onSelectGantry();
  onSelectTrack();
  setTrackSupportMode(document.getElementById('input_track_support_mode').value || 'slab');
};
