const localStorageKey = "user-dados"; 
const LocalIMG = "user-img";
const LocalStorageKey = "lead-info";
function showUserDados() {
  let userdata = JSON.parse(localStorage.getItem(localStorageKey) || "[]"); 
  let profileImage = localStorage.getItem(LocalIMG); 
  document.getElementById("user-foto").src = profileImage;   

  for (let i = 0; i < userdata.length; i++) {
    $(".nameUser").html(userdata[i]["nome"]);
  }

} 


function DAY_AND_MONTHS_AUTH() {
  /* 
  [1] FUNCIONALIDADES : VERIFICA OS DADOS DE DATAS NO LOCAL STORGE CADASTRADOS 
  E ARMAZENA NAS DEVIDAS VARIÁVEIS DE ACORDO COM AS VEZES QUE ESSAS DATAS APARECEM NO LOCALSTORAGE
  [2]AUTOR : THIAGO DUARTE MIRANDA DIAS
  
  
  
  */



  //variáveis que guardam a quantidade por MÊS.
  let mescountjaneiro = 0,
    mescountfevereiro = 0,
    mescountmarco = 0,
    mescountabril = 0,
    mescountmaio = 0,
    mescountjunho = 0,
    mescountjulho = 0,
    mescountagosto = 0,
    mescountsetembro = 0,
    mescountoutubro = 0,
    mescountnovembro = 0,
    mescountdezembro = 0;
  
  //variáveis de dias

  let segunda = 0,
    terca = 0,
    quarta = 0,
    quinta = 0,
    sexta = 0;

  let database = JSON.parse(localStorage.getItem("lead-info") || "[]");
  let tamanhoDB = database.length;
  let dateAtual = new Date();
  let dayAtual = dateAtual.getDay();
  //filtrando por Mês

  for (let i = 0; i < database.length; i++) {
    if (database[i]["Month"] == 0) {
      mescountjaneiro++;
      if (database[i]["Day"] == 1) {
        segunda++;
      } else {
        if (database[i]["Day"] == 2) {
          terca++;
        } else {
          if (database[i]["Day"] == 3) {
            quarta++;
          } else {
            if (database[i]["Day"] == 4) {
              quinta++;
            } else {
              if (database[i]["Day"] == 5) {
                sexta++;
              }
            }
          }
        }
      }
    } else {
      if (database[i]["Month"] == 1) {
        mescountfevereiro++;
        if (database[i]["Day"] == 1) {
          segunda++;
        } else {
          if (database[i]["Day"] == 2) {
            terca++;
          } else {
            if (database[i]["Day"] == 3) {
              quarta++;
            } else {
              if (database[i]["Day"] == 4) {
                quinta++;
              } else {
                if (database[i]["Day"] == 5) {
                  sexta++;
                }
              }
            }
          }
        }
      } else {
        if (database[i]["Month"] == 2) {
          mescountmarco++;
          if (database[i]["Day"] == 1) {
            segunda++;
          } else {
            if (database[i]["Day"] == 2) {
              terca++;
            } else {
              if (database[i]["Day"] == 3) {
                quarta++;
              } else {
                if (database[i]["Day"] == 4) {
                  quinta++;
                } else {
                  if (database[i]["Day"] == 5) {
                    sexta++;
                  }
                }
              }
            }
          }
        } else {
          if (database[i]["Month"] == 3) {
            mescountabril++;
            if (database[i]["Day"] == 1) {
              segunda++;
            } else {
              if (database[i]["Day"] == 2) {
                terca++;
              } else {
                if (database[i]["Day"] == 3) {
                  quarta++;
                } else {
                  if (database[i]["Day"] == 4) {
                    quinta++;
                  } else {
                    if (database[i]["Day"] == 5) {
                      sexta++;
                    }
                  }
                }
              }
            }
          } else {
            if (database[i]["Month"] == 4) {
              mescountmaio++;
              if (database[i]["Day"] == 1) {
                segunda++;
              } else {
                if (database[i]["Day"] == 2) {
                  terca++;
                } else {
                  if (database[i]["Day"] == 3) {
                    quarta++;
                  } else {
                    if (database[i]["Day"] == 4) {
                      quinta++;
                    } else {
                      if (database[i]["Day"] == 5) {
                        sexta++;
                      }
                    }
                  }
                }
              }
            } else {
              if (database[i]["Month"] == 5) {
                mescountjunho++;
                if (database[i]["Day"] == 1) {
                  segunda++;
                } else {
                  if (database[i]["Day"] == 2) {
                    terca++;
                  } else {
                    if (database[i]["Day"] == 3) {
                      quarta++;
                    } else {
                      if (database[i]["Day"] == 4) {
                        quinta++;
                      } else {
                        if (database[i]["Day"] == 5) {
                          sexta++;
                        }
                      }
                    }
                  }
                }
              } else {
                if (database[i]["Month"] == 6) {
                  mescountjulho++;
                  if (database[i]["Day"] == 1) {
                    segunda++;
                  } else {
                    if (database[i]["Day"] == 2) {
                      terca++;
                    } else {
                      if (database[i]["Day"] == 3) {
                        quarta++;
                      } else {
                        if (database[i]["Day"] == 4) {
                          quinta++;
                        } else {
                          if (database[i]["Day"] == 5) {
                            sexta++;
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (database[i]["Month"] == 7) {
                    mescountagosto++;
                    if (database[i]["Day"] == 1) {
                      segunda++;
                    } else {
                      if (database[i]["Day"] == 2) {
                        terca++;
                      } else {
                        if (database[i]["Day"] == 3) {
                          quarta++;
                        } else {
                          if (database[i]["Day"] == 4) {
                            quinta++;
                          } else {
                            if (database[i]["Day"] == 5) {
                              sexta++;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (database[i]["Month"] == 8) {
                      mescountsetembro++;
                      if (database[i]["Day"] == 1) {
                        segunda++;
                      } else {
                        if (database[i]["Day"] == 2) {
                          terca++;
                        } else {
                          if (database[i]["Day"] == 3) {
                            quarta++;
                          } else {
                            if (database[i]["Day"] == 4) {
                              quinta++;
                            } else {
                              if (database[i]["Day"] == 5) {
                                sexta++;
                              }
                            }
                          }
                        }
                      }
                    } else {
                      if (database[i]["Month"] == 9) {
                        mescountoutubro++;
                        if (database[i]["Day"] == 1) {
                          segunda++;
                        } else {
                          if (database[i]["Day"] == 2) {
                            terca++;
                          } else {
                            if (database[i]["Day"] == 3) {
                              quarta++;
                            } else {
                              if (database[i]["Day"] == 4) {
                                quinta++;
                              } else {
                                if (database[i]["Day"] == 5) {
                                  sexta++;
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (database[i]["Month"] == 10) {
                          mescountnovembro++;
                          if (database[i]["Day"] == 1) {
                            segunda++;
                          } else {
                            if (database[i]["Day"] == 2) {
                              terca++;
                            } else {
                              if (database[i]["Day"] == 3) {
                                quarta++;
                              } else {
                                if (database[i]["Day"] == 4) {
                                  quinta++;
                                } else {
                                  if (database[i]["Day"] == 5) {
                                    sexta++;
                                  }
                                  
                                }
                              }
                            }
                          }
                        } else {
                          if (database[i]["Month"] == 11) {
                            mescountdezembro++;
                            if (database[i]["Day"] == 1) {
                              segunda++;
                            } else {
                              if (database[i]["Day"] == 2) {
                                terca++;
                              } else {
                                if (database[i]["Day"] == 3) {
                                  quarta++;
                                } else {
                                  if (database[i]["Day"] == 4) {
                                    quinta++;
                                  } else {
                                    if (database[i]["Day"] == 5) {
                                      sexta++;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    document.getElementById("leads-count").innerHTML = tamanhoDB;
  }
  
  //FILTRANDO POR DIAS DA SEMANA :

  //AQUI ESTAMOS INDICANDO QUE É UM GRÁFICO DO TIPO  DE BARRA 

  const ctx = document.getElementById("line");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      datasets: [
        {
          label: "Leads Cadastradas",
          data: [
            mescountjaneiro,
            mescountfevereiro,
            mescountmarco,
            mescountabril,
            mescountjunho,
            mescountjulho,
            mescountagosto,
            mescountsetembro,
            mescountoutubro,
            mescountnovembro,
            mescountdezembro,
          ],
          borderWidth: 1, 
          backgroundColor: [
           "#41BDD9", 
          ], 
          borderColor: "#41BDD9",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      
    },
    
  });

  //bar 
  //ESTE É UM TIPO DE GRÁFICO DE BARRA SIMPLES 

  const ctx2 = document.getElementById("bar");

  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: [
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
      ],
      datasets: [
        {
          label: "Leads Cadastradas",
          data: [segunda, terca, quarta, quinta, sexta],
          borderWidth: 1, 
          backgroundColor: [
            "#41BDD9", 
          ],  
          borderColor: "#41BDD9",  
         
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  //donout

  

  //polar
  //ESTE É UM TIPO DE GRÁFICO POLAR
}

showUserDados();
DAY_AND_MONTHS_AUTH(); 

