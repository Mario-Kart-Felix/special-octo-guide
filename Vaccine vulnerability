import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import plotly.graph_objects as go
import pandas as pd

external_stylesheets = ['https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)


# assume you have a "long-form" data frame
# see https://plotly.com/python/px-arguments/ for more options
master_df = pd.read_csv('Data/master.csv')

stats_df = master_df.groupby('SVI Category', as_index = False).median()

vulnerability_order = ["Very High Vulnerability","High Vulnerability", "Moderate Vulnerability", "Low Vulnerability","Very Low Vulnerability"]
vulnerability_colours = ["orange","blue","#fdfd96","#ff6961","green"]

hesitant_vs_SVI = go.Bar(x=stats_df["SVI Category"], y=stats_df["Estimated hesitant"], marker_color=vulnerability_colours)

fig1 = go.Figure(hesitant_vs_SVI)

fig2_data = master_df.copy()
fig2_data = fig2_data.groupby('State', as_index = False).median()
fig2 = px.scatter(fig2_data, x= "Estimated hesitant" , y = "cases", color = "State")

fig4 = px.scatter(fig2_data, x= "Estimated hesitant" , y = "deaths", color = "State")

fig2.update_traces(marker=dict(size=10,
                              line=dict(width=2,
                                        color='DarkSlateGrey')),
                  selector=dict(mode='markers'))

fig4.update_traces(marker=dict(size=10,
                              line=dict(width=2,
                                        color='DarkSlateGrey')),
                  selector=dict(mode='markers'))

fig1.update_layout(xaxis={'categoryorder':'array', 'categoryarray':vulnerability_order},title={
        'text': "Hesitancy by Social Vulnerability Category",
        'y':0.9,
        'x':0.5,
        'xanchor': 'center',
        'yanchor': 'top'})

fig2.update_layout(xaxis={'categoryorder':'array', 'categoryarray':vulnerability_order},title={
        'text': "Number of COVID-19 Cases vs. Estimated Vaccine Hesistance by State.",
        'y':0.9,
        'x':0.5,
        'xanchor': 'center',
        'yanchor': 'top'})

fig4.update_layout(xaxis={'categoryorder':'array', 'categoryarray':vulnerability_order},title={
        'text': "Number of COVID-19 Deaths vs. Estimated Vaccine Hesistance by State.",
        'y':0.9,
        'x':0.5,
        'xanchor': 'center',
        'yanchor': 'top'})

fig3_data = master_df.groupby('State', as_index = False).mean()

fig3 = px.scatter(fig3_data, x= "Estimated hesitant" , y = "Social Vulnerability Index (SVI)", color = "State")
fig3.update_layout(title={
        'text': "SVI vs. Estimated Vaccine Hesistance by State.",
        'y':0.9,
        'x':0.5,
        'xanchor': 'center',
        'yanchor': 'top'})
fig3.update_traces(marker=dict(size=10,
                              line=dict(width=2,
                                        color='DarkSlateGrey')),
                  selector=dict(mode='markers'))   
app.layout = html.Div(children=[
    html.H1(children='Exploring Vaccine Hesitancy in the United States', style={'text-align':'center'}),
    html.Hr(),
    html.H2(children='Social Vulnerability?', style={'text-align':'center'}),
    dcc.Graph(
        id='hesitant_vs_SVI',
        figure=fig1,
    ),
     dcc.Graph(
        id='sc',
        figure=fig3,
    ),
    html.H2(children='Cases and Deaths?', style={'text-align':'center'}),

      dcc.Graph(
        id='scatter',
        figure=fig2,
    ),
      dcc.Graph(
        id='scatter4',
        figure=fig4,
    ),
])

if __name__ == '__main__':
    app.run_server(debug=True)
