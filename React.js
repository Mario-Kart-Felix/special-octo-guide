package fiuba.tpp.reactorapp.model.request;


import com.fasterxml.jackson.annotation.JsonProperty;

public class ProcessRequest {

    private Long id;

    @JsonProperty("idAdsorbato")
    private Long idAdsorbate;

    @JsonProperty("idAdsorbente")
    private Long idAdsorbent;

    @JsonProperty("qmax")
    private Float qmax;

    @JsonProperty("tiempoEquilibrio")
    private Float equilibriumTime;

    @JsonProperty("temperatura")
    private Float temperature;

    @JsonProperty("phinicial")
    private Float initialPH;

    @JsonProperty("complejacion")
    private boolean complexation;

    @JsonProperty("intercambioIonico")
    private boolean ionicInterchange;

    @JsonProperty("reaccionQuimica")
    private boolean chemicalReaction;

    @JsonProperty("observacion")
    private String observation;

    @JsonProperty("fuente")
    private String source;

    public ProcessRequest(Float qmax, Float equilibriumTime, Float temperature, Float initialPH, boolean complexation, boolean ionicInterchange, boolean chemicalReaction) {
        this.qmax = qmax;
        this.equilibriumTime = equilibriumTime;
        this.temperature = temperature;
        this.initialPH = initialPH;
        this.complexation = complexation;
        this.ionicInterchange = ionicInterchange;
        this.chemicalReaction = chemicalReaction;
    }

    public Long getIdAdsorbate() {
        return idAdsorbate;
    }

    public void setIdAdsorbate(Long idAdsorbate) {
        this.idAdsorbate = idAdsorbate;
    }

    public Long getIdAdsorbent() {
        return idAdsorbent;
    }

    public void setIdAdsorbent(Long idAdsorbent) {
        this.idAdsorbent = idAdsorbent;
    }

    public Float getQmax() {
        return qmax;
    }

    public void setQmax(Float qmax) {
        this.qmax = qmax;
    }

    public Float getEquilibriumTime() {
        return equilibriumTime;
    }

    public void setEquilibriumTime(Float equilibriumTime) {
        this.equilibriumTime = equilibriumTime;
    }

    public Float getTemperature() {
        return temperature;
    }

    public void setTemperature(Float temperature) {
        this.temperature = temperature;
    }

    public Float getInitialPH() {
        return initialPH;
    }

    public void setInitialPH(Float initialPH) {
        this.initialPH = initialPH;
    }

    public boolean isComplexation() {
        return complexation;
    }

    public void setComplexation(boolean complexation) {
        this.complexation = complexation;
    }

    public boolean isIonicInterchange() {
        return ionicInterchange;
    }

    public void setIonicInterchange(boolean ionicInterchange) {
        this.ionicInterchange = ionicInterchange;
    }

    public boolean isChemicalReaction() {
        return chemicalReaction;
    }

    public void setChemicalReaction(boolean chemicalReaction) {
        this.chemicalReaction = chemicalReaction;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
